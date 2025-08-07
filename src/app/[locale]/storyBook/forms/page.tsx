"use client";

import React, { useState } from 'react';
import { TextField } from '@/components/ui/text-field/TextField';
import { TextContent } from '@/components/ui/text-field/text-content';
import { Button } from '@/components/ui/text-field/button';
import { Badge } from '@/components/ui/text-field/badge';
import { S2PISeparator } from '@/components/ui/text-field/s2pi-separators';
import { DottedDivider } from '@/components/ui/dotted-divider';

export default function FormsShowcase() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: '',
    newsletter: false,
    notifications: 'all'
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-8 ml-64">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Form Components</h1>
        
        {/* Text Fields */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Text Fields</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Basic Text Fields</h3>
              
              <TextField
                label="Name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                variant="s2pi"
                s2piStyle
              />
              
              <TextField
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                variant="s2pi"
                s2piStyle
                helperText="We'll never share your email"
              />
              
              <TextField
                label="Message"
                multiline
                rows={4}
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                variant="s2pi"
                s2piStyle
                characterCount
                maxLength={500}
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Field Variants</h3>
              
              <TextField
                label="Default Variant"
                placeholder="Default styling"
                variant="default"
              />
              
              <TextField
                label="Outlined Variant"
                placeholder="Outlined styling"
                variant="outlined"
              />
              
              <TextField
                label="Filled Variant"
                placeholder="Filled styling"
                variant="filled"
              />
              
              <TextField
                label="Underlined Variant"
                placeholder="Underlined styling"
                variant="underlined"
              />
            </div>
          </div>
        </section>

        {/* Text Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Text Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Typography Variants</h3>
              
              <TextContent as="h1" variant="heading" size="3xl" s2piStyle>
                Heading 3XL - Main Title
              </TextContent>
              
              <TextContent as="h2" variant="heading" size="2xl" s2piStyle>
                Heading 2XL - Section Title
              </TextContent>
              
              <TextContent as="h3" variant="heading" size="xl" s2piStyle>
                Heading XL - Subsection
              </TextContent>
              
              <TextContent as="p" variant="body" size="lg" s2piStyle>
                Body Large - This is a larger body text for important content.
              </TextContent>
              
              <TextContent as="p" variant="body" size="md" s2piStyle>
                Body Medium - This is standard body text for regular content.
              </TextContent>
              
              <TextContent as="p" variant="caption" size="sm" s2piStyle>
                Caption Small - This is caption text for small details.
              </TextContent>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Content Styles</h3>
              
              <TextContent variant="highlight" s2piStyle>
                Highlight Text - This text is highlighted for emphasis.
              </TextContent>
              
              <TextContent variant="body" weight="bold" s2piStyle>
                Bold Text - This text is bold for strong emphasis.
              </TextContent>
              
              <TextContent variant="body" weight="medium" s2piStyle>
                Medium Weight - This text has medium weight.
              </TextContent>
              
              <TextContent variant="body" weight="light" s2piStyle>
                Light Weight - This text has light weight.
              </TextContent>
              
              <TextContent variant="body" dotted s2piStyle>
                Dotted Text - This text has a dotted underline effect.
              </TextContent>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Form Buttons</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Button Variants</h3>
              <div className="flex gap-4 flex-wrap">
                <Button variant="default">Default</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Button Sizes</h3>
              <div className="flex gap-4 flex-wrap items-center">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Badges</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Badge Variants</h3>
              <div className="flex gap-4 flex-wrap">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Separators */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Separators</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Basic Separators</h3>
              <div className="space-y-4">
                <S2PISeparator />
                <S2PISeparator variant="line" />
                <S2PISeparator variant="dotted" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Separators with Text</h3>
              <div className="space-y-4">
                <S2PISeparator text="Section" />
                <S2PISeparator text="OR" variant="line" />
                <S2PISeparator text="DIVIDER" variant="dotted" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Custom Styling</h3>
              <div className="space-y-4">
                <S2PISeparator 
                  text="Custom Color" 
                  lineColor="#3b82f6" 
                  textColor="#1e40af"
                />
                <S2PISeparator 
                  text="Thick Line" 
                  lineWidth="4px" 
                  variant="line"
                />
                <S2PISeparator 
                  text="Large Text" 
                  size="lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dotted Dividers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Dotted Dividers</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Basic Dividers</h3>
              <div className="space-y-4">
                <DottedDivider dotCount={20} dotColor="#dc2626" />
                <DottedDivider dotCount={15} dotColor="#1d4572" dotSize="large" />
                <DottedDivider dotCount={25} dotColor="#7b6a58" spacing="tight" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Dividers with Text</h3>
              <div className="space-y-4">
                <DottedDivider 
                  text="Section" 
                  dotColor="#13abd1" 
                  textColor="#13abd1"
                />
                <DottedDivider 
                  text="OR" 
                  split={{ left: 10, right: 10 }}
                  dotColor="#ad0309" 
                  textColor="#ad0309"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Complete Form Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Complete Form Example</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField
                  label="First Name"
                  placeholder="Enter your first name"
                  variant="s2pi"
                  s2piStyle
                  required
                />
                
                <TextField
                  label="Last Name"
                  placeholder="Enter your last name"
                  variant="s2pi"
                  s2piStyle
                  required
                />
              </div>
              
              <TextField
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
                variant="s2pi"
                s2piStyle
                required
                helperText="We'll use this to contact you"
              />
              
              <TextField
                label="Message"
                multiline
                rows={4}
                placeholder="Tell us about your project"
                variant="s2pi"
                s2piStyle
                characterCount
                maxLength={1000}
              />
              
              <S2PISeparator text="SUBMIT" />
              
              <div className="flex gap-4">
                <Button type="submit" variant="default">
                  Submit Form
                </Button>
                <Button type="button" variant="outline">
                  Reset
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
} 