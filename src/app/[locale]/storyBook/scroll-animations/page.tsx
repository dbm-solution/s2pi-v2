"use client";

import React, { useEffect } from 'react';
import { useAutoScrollAnimation } from '@/hooks/use-scroll-animation';
import { DottedDivider } from '@/components/ui/dotted-divider';

export default function ScrollAnimationsDemo() {
  // Initialize scroll animations
  useAutoScrollAnimation();

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '40px 20px',
      fontFamily: 'Inter, sans-serif'
    }}>
      
      {/* Header */}
      <div className="scroll-fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Scroll Animation Demo
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Scroll down to see elements animate into view with various effects.
          Each animation class can be reused throughout your application.
        </p>
      </div>

      {/* Basic Animations */}
      <section style={{ marginBottom: '80px' }}>
        <h2 className="scroll-fade-in-small" style={{ 
          fontSize: '2rem', 
          fontWeight: '600', 
          marginBottom: '40px',
          color: '#2d3748'
        }}>
          Basic Slide Animations
        </h2>

        <div className="scroll-fade-in" style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>scroll-fade-in</h3>
          <p>The standard slide-from-top animation with smooth easing.</p>
          <code style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '4px 8px', 
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            className="scroll-fade-in"
          </code>
        </div>

        <div className="scroll-fade-in-small" style={{ 
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>scroll-fade-in-small</h3>
          <p>Subtle animation with smaller movement distance.</p>
          <code style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '4px 8px', 
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            className="scroll-fade-in-small"
          </code>
        </div>

        <div className="scroll-fade-in-large" style={{ 
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          color: 'white',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>scroll-fade-in-large</h3>
          <p>Dramatic animation with larger movement distance.</p>
          <code style={{ 
            background: 'rgba(255,255,255,0.2)', 
            padding: '4px 8px', 
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            className="scroll-fade-in-large"
          </code>
        </div>
      </section>

      {/* Divider */}
      <div className="scroll-fade-in">
        <DottedDivider 
          text="SPECIAL EFFECTS"
          dotColor="#8b5cf6"
          textColor="#6b21a8"
          textWeight="bold"
        />
      </div>

      {/* Special Effects */}
      <section style={{ marginBottom: '80px', marginTop: '60px' }}>
        <h2 className="scroll-fade-in-bounce" style={{ 
          fontSize: '2rem', 
          fontWeight: '600', 
          marginBottom: '40px',
          color: '#2d3748'
        }}>
          Special Effects
        </h2>

        <div className="scroll-fade-in-bounce" style={{ 
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
          color: 'white',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>scroll-fade-in-bounce</h3>
          <p>Bouncy animation with elastic easing for playful elements.</p>
        </div>

        <div className="scroll-scale-in" style={{ 
          background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
          color: '#2d3748',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>scroll-scale-in</h3>
          <p>Combines slide and scale effects for engaging entrances.</p>
        </div>

        <div className="scroll-slide-up" style={{ 
          background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
          color: '#2d3748',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>scroll-slide-up</h3>
          <p>Slides up from bottom instead of down from top.</p>
        </div>
      </section>

      {/* Direction Variants */}
      <section style={{ marginBottom: '80px' }}>
        <h2 className="scroll-fade-in-left" style={{ 
          fontSize: '2rem', 
          fontWeight: '600', 
          marginBottom: '40px',
          color: '#2d3748'
        }}>
          Directional Animations
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
          <div className="scroll-fade-in-left" style={{ 
            background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
            color: '#2d3748',
            padding: '30px',
            borderRadius: '12px'
          }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>From Left</h3>
            <p>scroll-fade-in-left</p>
          </div>

          <div className="scroll-fade-in-right" style={{ 
            background: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
            color: '#2d3748',
            padding: '30px',
            borderRadius: '12px'
          }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>From Right</h3>
            <p>scroll-fade-in-right</p>
          </div>
        </div>
      </section>

      {/* Speed Variants */}
      <section style={{ marginBottom: '80px' }}>
        <h2 className="scroll-fade-in-fast" style={{ 
          fontSize: '2rem', 
          fontWeight: '600', 
          marginBottom: '40px',
          color: '#2d3748'
        }}>
          Speed Variants
        </h2>

        <div className="scroll-fade-in-fast" style={{ 
          background: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)',
          color: '#2d3748',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>scroll-fade-in-fast</h3>
          <p>Quick animation (0.4s) for immediate impact.</p>
        </div>

        <div className="scroll-fade-in-slow" style={{ 
          background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
          color: 'white',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>scroll-fade-in-slow</h3>
          <p>Slow animation (1.5s) for dramatic effect.</p>
        </div>

        <div className="scroll-fade-in-smooth" style={{ 
          background: 'linear-gradient(135deg, #f1deff 0%, #fce2ce 100%)',
          color: '#2d3748',
          padding: '40px',
          borderRadius: '12px',
          marginBottom: '30px'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>scroll-fade-in-smooth</h3>
          <p>Very smooth animation with silk-like easing.</p>
        </div>
      </section>

      {/* Staggered Animation */}
      <section style={{ marginBottom: '80px' }}>
        <h2 className="scroll-fade-in" style={{ 
          fontSize: '2rem', 
          fontWeight: '600', 
          marginBottom: '40px',
          color: '#2d3748'
        }}>
          Staggered Animations
        </h2>

        <p className="scroll-fade-in" style={{ marginBottom: '30px', color: '#666' }}>
          Perfect for lists, grids, or any group of elements that should animate in sequence:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div className="scroll-fade-in-stagger" style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4>Card 1</h4>
            <p>First to animate</p>
          </div>

          <div className="scroll-fade-in-stagger" style={{ 
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4>Card 2</h4>
            <p>100ms delay</p>
          </div>

          <div className="scroll-fade-in-stagger" style={{ 
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4>Card 3</h4>
            <p>200ms delay</p>
          </div>

          <div className="scroll-fade-in-stagger" style={{ 
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4>Card 4</h4>
            <p>300ms delay</p>
          </div>

          <div className="scroll-fade-in-stagger" style={{ 
            background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            color: 'white',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4>Card 5</h4>
            <p>400ms delay</p>
          </div>

          <div className="scroll-fade-in-stagger" style={{ 
            background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            color: '#2d3748',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h4>Card 6</h4>
            <p>500ms delay</p>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section style={{ marginBottom: '80px' }}>
        <h2 className="scroll-fade-in" style={{ 
          fontSize: '2rem', 
          fontWeight: '600', 
          marginBottom: '40px',
          color: '#2d3748'
        }}>
          Real-World Usage
        </h2>

        <div className="scroll-fade-in" style={{ 
          background: '#f7fafc',
          padding: '30px',
          borderRadius: '12px',
          marginBottom: '30px',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#2d3748' }}>How to Use:</h3>
          
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '10px' }}>1. Import the hook in your component:</h4>
            <code style={{ 
              display: 'block',
              background: '#2d3748',
              color: '#a0aec0',
              padding: '15px',
              borderRadius: '8px',
              fontSize: '14px',
              fontFamily: 'monospace'
            }}>
              {`import { useAutoScrollAnimation } from '@/hooks/use-scroll-animation';`}
            </code>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '10px' }}>2. Initialize in your component:</h4>
            <code style={{ 
              display: 'block',
              background: '#2d3748',
              color: '#a0aec0',
              padding: '15px',
              borderRadius: '8px',
              fontSize: '14px',
              fontFamily: 'monospace'
            }}>
              {`useAutoScrollAnimation();`}
            </code>
          </div>

          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '10px' }}>3. Add classes to any element:</h4>
            <code style={{ 
              display: 'block',
              background: '#2d3748',
              color: '#a0aec0',
              padding: '15px',
              borderRadius: '8px',
              fontSize: '14px',
              fontFamily: 'monospace'
            }}>
              {`<div className="scroll-fade-in">This will animate!</div>`}
            </code>
          </div>
        </div>

        <div className="scroll-fade-in-small" style={{ 
          background: '#fffbeb',
          padding: '25px',
          borderRadius: '12px',
          border: '1px solid #fbbf24'
        }}>
          <h4 style={{ color: '#92400e', fontWeight: '600', marginBottom: '10px' }}>💡 Pro Tip:</h4>
          <p style={{ color: '#92400e', marginBottom: '0' }}>
            The animations respect user preferences! If someone has "prefers-reduced-motion" enabled, 
            the animations will be disabled automatically for accessibility.
          </p>
        </div>
      </section>

      {/* Footer */}
      <div className="scroll-fade-in" style={{ textAlign: 'center', marginTop: '80px' }}>
        <DottedDivider 
          text="END OF DEMO"
          dotColor="#6b21a8"
          textColor="#6b21a8"
          textWeight="bold"
          animation="fade-in"
        />
        <p style={{ marginTop: '30px', color: '#666', fontSize: '18px' }}>
          🎉 You've seen all the scroll animations! 
        </p>
        <p style={{ color: '#666' }}>
          Add these classes to any element in your application to create engaging scroll experiences.
        </p>
      </div>
    </div>
  );
} 