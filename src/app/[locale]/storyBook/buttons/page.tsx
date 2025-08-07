"use client";

import React from 'react';
import { ActionsButton } from '@/components/ui/buttons/actions-button/actions-button';
import { MenuButton } from '@/components/ui/buttons/menu-button/menu-button';
import { SocialButton } from '@/components/ui/buttons/social-button/Social-button';
import MicroWidgetButton from '@/components/ui/MicroWidgetButton';
import EnquetteButton from '@/components/ui/buttons/enquette/enquette.button';

export default function ButtonsShowcase() {
  return (
    <div className="p-8 ml-64">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Button Components</h1>
        
        {/* Action Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Action Buttons</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Variants</h3>
              <div className="flex gap-4 flex-wrap">
                <ActionsButton variant="primary">Primary</ActionsButton>
                <ActionsButton variant="secondary">Secondary</ActionsButton>
                <ActionsButton variant="success">Success</ActionsButton>
                <ActionsButton variant="warning">Warning</ActionsButton>
                <ActionsButton variant="danger">Danger</ActionsButton>
                <ActionsButton variant="info">Info</ActionsButton>
                <ActionsButton variant="custom">Custom</ActionsButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Sizes</h3>
              <div className="flex gap-4 flex-wrap items-center">
                <ActionsButton variant="primary" size="sm">Small</ActionsButton>
                <ActionsButton variant="primary" size="md">Medium</ActionsButton>
                <ActionsButton variant="primary" size="lg">Large</ActionsButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Shapes</h3>
              <div className="flex gap-4 flex-wrap">
                <ActionsButton variant="primary" shape="rectangle">Rectangle</ActionsButton>
                <ActionsButton variant="primary" shape="rounded">Rounded</ActionsButton>
                <ActionsButton variant="primary" shape="pill">Pill</ActionsButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">With Icons</h3>
              <div className="flex gap-4 flex-wrap">
                <ActionsButton variant="primary" icon="→" iconPosition="right">
                  With Icon
                </ActionsButton>
                <ActionsButton variant="secondary" icon="←" iconPosition="left">
                  With Icon
                </ActionsButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">States</h3>
              <div className="flex gap-4 flex-wrap">
                <ActionsButton variant="primary">Normal</ActionsButton>
                <ActionsButton variant="primary" disabled>Disabled</ActionsButton>
                <ActionsButton variant="primary" loading>Loading</ActionsButton>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Menu Buttons</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Variants</h3>
              <div className="flex gap-4 flex-wrap">
                <MenuButton variant="default">Default</MenuButton>
                <MenuButton variant="active">Active</MenuButton>
                <MenuButton variant="highlight">Highlight</MenuButton>
                <MenuButton variant="secondary">Secondary</MenuButton>
                <MenuButton variant="custom">Custom</MenuButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Sizes</h3>
              <div className="flex gap-4 flex-wrap items-center">
                <MenuButton variant="default" size="sm">Small</MenuButton>
                <MenuButton variant="default" size="md">Medium</MenuButton>
                <MenuButton variant="default" size="lg">Large</MenuButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">With Dropdown</h3>
              <div className="flex gap-4 flex-wrap">
                <MenuButton variant="default" hasDropdown>With Dropdown</MenuButton>
                <MenuButton variant="active" hasDropdown isOpen>Open Dropdown</MenuButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">With Badge</h3>
              <div className="flex gap-4 flex-wrap">
                <MenuButton variant="default" badge="3">Notifications</MenuButton>
                <MenuButton variant="active" badge="New">Messages</MenuButton>
              </div>
            </div>
          </div>
        </section>

        {/* Social Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Social Buttons</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Platforms</h3>
              <div className="flex gap-4 flex-wrap">
                <SocialButton variant="facebook">Facebook</SocialButton>
                <SocialButton variant="linkedin">LinkedIn</SocialButton>
                <SocialButton variant="email">Email</SocialButton>
                <SocialButton variant="twitter">Twitter</SocialButton>
                <SocialButton variant="custom">Custom</SocialButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Sizes</h3>
              <div className="flex gap-4 flex-wrap items-center">
                <SocialButton variant="facebook" size="sm">Small</SocialButton>
                <SocialButton variant="facebook" size="md">Medium</SocialButton>
                <SocialButton variant="facebook" size="lg">Large</SocialButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Shapes</h3>
              <div className="flex gap-4 flex-wrap">
                <SocialButton variant="linkedin" shape="rectangle">Rectangle</SocialButton>
                <SocialButton variant="linkedin" shape="rounded">Rounded</SocialButton>
                <SocialButton variant="linkedin" shape="pill">Pill</SocialButton>
              </div>
            </div>
          </div>
        </section>

        {/* Micro Widget Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Micro Widget Buttons</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Variants</h3>
              <div className="flex gap-4 flex-wrap">
                <MicroWidgetButton href="/test" variant="primary">Primary</MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="secondary">Secondary</MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="outline">Outline</MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="ghost">Ghost</MicroWidgetButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Sizes</h3>
              <div className="flex gap-4 flex-wrap items-center">
                <MicroWidgetButton href="/test" variant="primary" size="sm">Small</MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="primary" size="md">Medium</MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="primary" size="lg">Large</MicroWidgetButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Icon Positions</h3>
              <div className="flex gap-4 flex-wrap">
                <MicroWidgetButton href="/test" variant="primary" icon="→" iconAlign="left">
                  Left Icon
                </MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="primary" icon="→" iconAlign="right">
                  Right Icon
                </MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="primary" icon="→" iconAlign="center">
                  Center Icon
                </MicroWidgetButton>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">S2PI Specific</h3>
              <div className="flex gap-4 flex-wrap">
                <MicroWidgetButton href="/test" variant="primary" bgOn hoverBgOn>
                  With Background
                </MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="outline" borderOn hoverBorderOn>
                  With Border
                </MicroWidgetButton>
                <MicroWidgetButton href="/test" variant="primary" disableAnimation>
                  No Animation
                </MicroWidgetButton>
              </div>
            </div>
          </div>
        </section>

        {/* Enquête Button */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Enquête Button</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Variants</h3>
              <div className="flex gap-4 flex-wrap">
                <EnquetteButton variant="topbar" />
                <EnquetteButton variant="standard" />
                <EnquetteButton variant="large" />
                <EnquetteButton variant="outline" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Sizes</h3>
              <div className="flex gap-4 flex-wrap items-center">
                <EnquetteButton variant="standard" size="sm" />
                <EnquetteButton variant="standard" size="md" />
                <EnquetteButton variant="standard" size="lg" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Custom Text</h3>
              <div className="flex gap-4 flex-wrap">
                <EnquetteButton variant="standard">
                  Custom Enquête Text
                </EnquetteButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 