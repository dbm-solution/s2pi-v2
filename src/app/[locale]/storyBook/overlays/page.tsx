"use client";

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer/drawer';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover/popover';
import { Button } from '@/components/ui/text-field/button';
import { ActionsButton } from '@/components/ui/buttons/actions-button/actions-button';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toast/toaster';

export default function OverlaysShowcase() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
  }, []);

  const showToast = (variant: 'default' | 'destructive') => {
    toast({
      variant,
      title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Toast`,
      description: `This is a ${variant} toast notification.`,
    });
  };

  if (!mounted) {
    return (
      <div className="p-8 ml-64">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Overlay Components</h1>
          <div className="text-center py-8">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 ml-64">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Overlay Components</h1>
        
        {/* Dialog */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Dialog Components</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Basic Dialog</h3>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="default">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="name" className="text-right">
                        Name
                      </label>
                      <input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3 border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor="username" className="text-right">
                        Username
                      </label>
                      <input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3 border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setDialogOpen(false)}>
                      Save changes
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Confirmation Dialog</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive">Delete Item</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Confirm Deletion</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete this item? This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex justify-end gap-3">
                    <Button variant="outline">
                      Cancel
                    </Button>
                    <Button variant="destructive">
                      Delete
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Drawer */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Drawer Components</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Basic Drawer</h3>
              <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
                <DrawerTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Move Goal</DrawerTitle>
                      <DrawerDescription>
                        Set your daily activity goal.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <div className="flex items-center justify-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                        >
                          <span className="sr-only">Decrease</span>
                          <span>-</span>
                        </Button>
                        <div className="flex-1 text-center">
                          <div className="text-7xl font-bold tracking-tighter">
                            0
                          </div>
                          <div className="text-xs text-muted-foreground">
                            CALORIES/DAY
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                        >
                          <span className="sr-only">Increase</span>
                          <span>+</span>
                        </Button>
                      </div>
                      <div className="mt-3 h-[120px]">
                        {/* Placeholder for chart */}
                        <div className="h-full bg-gray-100 rounded flex items-center justify-center">
                          Chart Placeholder
                        </div>
                      </div>
                    </div>
                    <DrawerFooter>
                      <Button>Submit</Button>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Settings Drawer</h3>
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="secondary">Settings</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Settings</DrawerTitle>
                      <DrawerDescription>
                        Configure your application settings.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0 space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Theme</label>
                        <select className="w-full border border-gray-300 rounded px-3 py-2">
                          <option>Light</option>
                          <option>Dark</option>
                          <option>System</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Language</label>
                        <select className="w-full border border-gray-300 rounded px-3 py-2">
                          <option>English</option>
                          <option>French</option>
                          <option>Spanish</option>
                        </select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="notifications" />
                        <label htmlFor="notifications" className="text-sm">
                          Enable notifications
                        </label>
                      </div>
                    </div>
                    <DrawerFooter>
                      <Button>Save Settings</Button>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </section>

        {/* Popover */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Popover Components</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Basic Popover</h3>
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <label htmlFor="width">Width</label>
                        <input
                          id="width"
                          defaultValue="100%"
                          className="col-span-2 h-8 border border-gray-300 rounded px-3"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <label htmlFor="maxWidth">Max. width</label>
                        <input
                          id="maxWidth"
                          defaultValue="300px"
                          className="col-span-2 h-8 border border-gray-300 rounded px-3"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <label htmlFor="height">Height</label>
                        <input
                          id="height"
                          defaultValue="25px"
                          className="col-span-2 h-8 border border-gray-300 rounded px-3"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <label htmlFor="maxHeight">Max. height</label>
                        <input
                          id="maxHeight"
                          defaultValue="none"
                          className="col-span-2 h-8 border border-gray-300 rounded px-3"
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Info Popover</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <span className="sr-only">Open menu</span>
                    <span>ℹ️</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Information</h4>
                    <p className="text-sm text-muted-foreground">
                      This is additional information about the current context.
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        Last updated: 2 hours ago
                      </span>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">User Menu Popover</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <span>👤</span>
                    <span className="ml-2">John Doe</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">john@example.com</p>
                      </div>
                    </div>
                    <div className="border-t pt-2">
                      <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded">
                        Profile
                      </button>
                      <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded">
                        Settings
                      </button>
                      <button className="w-full text-left px-2 py-1 text-sm hover:bg-gray-100 rounded">
                        Sign out
                      </button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>

        {/* Toast */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Toast Components</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Toast Variants</h3>
              <div className="flex gap-4 flex-wrap">
                <Button onClick={() => showToast('default')}>
                  Default Toast
                </Button>
                <Button onClick={() => showToast('default')} variant="outline">
                  Default Toast
                </Button>
                <Button onClick={() => showToast('default')} variant="outline">
                  Info Toast
                </Button>
                <Button onClick={() => showToast('destructive')} variant="destructive">
                  Error Toast
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Custom Toast</h3>
              <Button
                onClick={() => {
                  toast({
                    title: "Custom Toast",
                    description: "This is a custom toast with additional styling.",
                    duration: 5000,
                  });
                }}
              >
                Custom Duration Toast
              </Button>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Action Toast</h3>
              <Button
                onClick={() => {
                  toast({
                    title: "Action Required",
                    description: "Please confirm your action.",
                    action: (
                      <Button variant="outline" size="sm">
                        Confirm
                      </Button>
                    ),
                  });
                }}
              >
                Toast with Action
              </Button>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Usage Examples</h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">E-commerce Product</h3>
              <div className="flex gap-4 items-center">
                <div className="w-20 h-20 bg-gray-200 rounded"></div>
                <div className="flex-1">
                  <h4 className="font-medium">Product Name</h4>
                  <p className="text-sm text-gray-600">$99.99</p>
                </div>
                <div className="flex gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="sm">ℹ️</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <p>Product details and specifications</p>
                    </PopoverContent>
                  </Popover>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm">Quick View</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Product Details</DialogTitle>
                      </DialogHeader>
                      <p>Full product information and images</p>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-4">User Dashboard</h3>
              <div className="flex gap-4">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="outline">Menu</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Navigation Menu</DrawerTitle>
                      </DrawerHeader>
                      <div className="p-4 space-y-2">
                        <button className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                          Dashboard
                        </button>
                        <button className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                          Profile
                        </button>
                        <button className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded">
                          Settings
                        </button>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
                
                <Button
                  onClick={() => {
                    toast({
                      title: "Welcome back!",
                      description: "Your dashboard has been updated.",
                    });
                  }}
                >
                  Show Welcome Toast
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Toaster Component */}
        <Toaster />
      </div>
    </div>
  );
} 