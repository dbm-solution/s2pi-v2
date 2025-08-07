"use client";

import React from 'react';
import { 
  DottedDivider, 
  HorizontalDottedDivider, 
  VerticalDottedDivider,
  SectionDivider,
  HeaderDivider 
} from '@/components/ui/dotted-divider';

export default function DottedDividerDemo() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '40px', textAlign: 'center' }}>DottedDivider Component Demo</h1>

      {/* Basic Examples */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Basic Dotted Dividers</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Simple horizontal divider</h3>
          <DottedDivider />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Custom color and size</h3>
          <DottedDivider 
            dotCount={7}
            dotColor="#3b82f6"
            dotSize="large"
            spacing="loose"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Small tight spacing</h3>
          <DottedDivider 
            dotCount={10}
            dotColor="#ef4444"
            dotSize={2}
            spacing="superTight"
          />
        </div>
      </section>

      {/* With Text */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Dividers with Text</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Text in the middle</h3>
          <DottedDivider 
            text="Section Title"
            dotCount={8}
            dotColor="#10b981"
            textColor="#374151"
            textSize="medium"
            textWeight="semibold"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Header style</h3>
          <HeaderDivider 
            text="HEADER DIVIDER"
            dotColor="#8b5cf6"
            textColor="#6b21a8"
            textWeight="bold"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Section style</h3>
          <SectionDivider 
            text="Section"
            dotColor="#f59e0b"
            textColor="#92400e"
          />
        </div>
      </section>

      {/* Split Configuration */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Custom Split Configuration</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Asymmetric split</h3>
          <DottedDivider 
            split={{ left: 3, right: 7 }}
            text="ASYMMETRIC"
            dotColor="#06b6d4"
            textColor="#0891b2"
            textWeight="bold"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Different split without text</h3>
          <DottedDivider 
            split={{ left: 2, right: 4 }}
            dotColor="#ec4899"
            dotSize="large"
            spacing="loose"
          />
        </div>
      </section>

      {/* Alignments */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Different Alignments</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Left aligned</h3>
          <DottedDivider 
            text="Left"
            align="left"
            dotColor="#84cc16"
            textColor="#365314"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Center aligned (default)</h3>
          <DottedDivider 
            text="Center"
            align="center"
            dotColor="#f97316"
            textColor="#9a3412"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Right aligned</h3>
          <DottedDivider 
            text="Right"
            align="right"
            dotColor="#a855f7"
            textColor="#6b21a8"
          />
        </div>
      </section>

      {/* Animations */}
      <section style={{ marginBottom: '40px' }}>
        <h2>With Animations</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Fade in animation</h3>
          <DottedDivider 
            text="FADE IN"
            animation="fade-in"
            dotColor="#14b8a6"
            textColor="#0f766e"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Slide in animation</h3>
          <DottedDivider 
            text="SLIDE IN"
            animation="slide-in"
            dotColor="#f43f5e"
            textColor="#be123c"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Pulse animation</h3>
          <DottedDivider 
            text="PULSE"
            animation="pulse"
            dotColor="#6366f1"
            textColor="#4338ca"
          />
        </div>
      </section>

      {/* Vertical Dividers */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Vertical Dividers</h2>
        
        <div style={{ display: 'flex', height: '200px', gap: '40px', alignItems: 'center' }}>
          <div>
            <h3>Simple vertical</h3>
            <VerticalDottedDivider 
              dotCount={5}
              dotColor="#8b5cf6"
            />
          </div>

          <div>
            <h3>With text</h3>
            <VerticalDottedDivider 
              text="VERTICAL"
              dotCount={6}
              dotColor="#10b981"
              textColor="#059669"
            />
          </div>

          <div>
            <h3>Split vertical</h3>
            <VerticalDottedDivider 
              split={{ left: 2, right: 3 }}
              text="SPLIT"
              dotColor="#f59e0b"
              textColor="#d97706"
            />
          </div>
        </div>
      </section>

      {/* Custom Numeric Values */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Custom Numeric Values</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3>Custom dot size (15px)</h3>
          <DottedDivider 
            dotSize={15}
            dotColor="#6366f1"
            dotCount={6}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h3>Custom spacing (30px)</h3>
          <DottedDivider 
            spacing={30}
            dotColor="#ec4899"
            dotCount={5}
          />
        </div>
      </section>

      {/* Real-world Examples */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Real-world Examples</h2>
        
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3>Article Section</h3>
          <p>Some content here...</p>
          <DottedDivider 
            text="NEXT SECTION"
            dotColor="#64748b"
            textColor="#475569"
            textSize="small"
            textWeight="medium"
            dotCount={6}
            dotSize="small"
          />
          <p>More content here...</p>
        </div>

        <div style={{ background: '#fefce8', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3>Navigation Separator</h3>
          <DottedDivider 
            text="PRODUCTS"
            dotColor="#eab308"
            textColor="#a16207"
            textWeight="bold"
            split={{ left: 2, right: 2 }}
          />
        </div>

        <div style={{ background: '#fdf2f8', padding: '20px', borderRadius: '8px' }}>
          <h3>Timeline Marker</h3>
          <DottedDivider 
            text="2024"
            dotColor="#ec4899"
            textColor="#be185d"
            textSize="large"
            textWeight="bold"
            animation="fade-in"
          />
        </div>
      </section>
    </div>
  );
} 