import Link from 'next/link';

export default function CustomizationPage() {
  return (
    <div className="docs-container">
      <header className="docs-header">
        <Link href="/docs" className="back-link">← Back to Components</Link>
        <h1 className="docs-title">Customization Guide</h1>
        <p className="docs-subtitle">
          Make these components your own
        </p>
      </header>

      <div className="guide-content">
        <section className="guide-section">
          <h2>Design System Overview</h2>
          <p>
            This boilerplate uses a consistent design system with variables for colors, 
            typography, and spacing. Modify these variables once, and all components update automatically.
          </p>
        </section>

        <section className="guide-section">
          <h2>Customizing Colors</h2>
          
          <div className="method-card">
            <h3>Method 1: Visual Editor</h3>
            <ol>
              <li>Open your site in Webflow Designer</li>
              <li>Go to the Style Guide page (<code>/style-guide</code>)</li>
              <li>Click on any color swatch</li>
              <li>Update the color value</li>
              <li>All components using that color will update automatically</li>
            </ol>
          </div>

          <div className="method-card">
            <h3>Method 2: CSS Variables</h3>
            <p>Edit the root CSS variables in your site settings:</p>
            <pre className="code-block">{`:root {
  /* Primary Colors */
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-primary-light: #60a5fa;
  
  /* Neutral Colors */
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-text-secondary: #6b7280;
  
  /* Accent Colors */
  --color-accent: #f59e0b;
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
}`}</pre>
          </div>

          <div className="color-palette">
            <h4>Default Color Palette</h4>
            <div className="palette-grid">
              <div className="palette-item">
                <div className="color-swatch" style={{backgroundColor: '#3b82f6'}}></div>
                <div className="color-name">Primary</div>
                <code>#3b82f6</code>
              </div>
              <div className="palette-item">
                <div className="color-swatch" style={{backgroundColor: '#111827'}}></div>
                <div className="color-name">Text</div>
                <code>#111827</code>
              </div>
              <div className="palette-item">
                <div className="color-swatch" style={{backgroundColor: '#f59e0b'}}></div>
                <div className="color-name">Accent</div>
                <code>#f59e0b</code>
              </div>
              <div className="palette-item">
                <div className="color-swatch" style={{backgroundColor: '#f9fafb'}}></div>
                <div className="color-name">Surface</div>
                <code>#f9fafb</code>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>Typography</h2>
          
          <div className="typography-section">
            <h3>Font Families</h3>
            <p>The boilerplate uses system fonts by default for optimal performance:</p>
            <pre className="code-block">{`:root {
  --font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'Fira Code', 'Courier New', monospace;
}`}</pre>

            <h4>Using Custom Fonts</h4>
            <ol>
              <li>Go to Site Settings → Fonts</li>
              <li>Upload your font files or connect to Google Fonts</li>
              <li>Update the CSS variables to use your custom fonts</li>
            </ol>
          </div>

          <div className="typography-section">
            <h3>Font Sizes</h3>
            <pre className="code-block">{`:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
}`}</pre>
          </div>
        </section>

        <section className="guide-section">
          <h2>Spacing System</h2>
          <p>Consistent spacing creates visual harmony:</p>
          <pre className="code-block">{`:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-24: 6rem;     /* 96px */
}`}</pre>

          <div className="tip-box">
            <strong>💡 Pro Tip:</strong> Use multiples of 4px for spacing to maintain consistency 
            across all components.
          </div>
        </section>

        <section className="guide-section">
          <h2>Modifying Individual Components</h2>

          <div className="component-mod">
            <h3>Changing Component Text</h3>
            <div className="mod-steps">
              <div className="mod-step">
                <strong>Visual Editor:</strong>
                <ol>
                  <li>Select the component on your page</li>
                  <li>Double-click any text element</li>
                  <li>Type your new text</li>
                  <li>Press Enter to save</li>
                </ol>
              </div>
              <div className="mod-step">
                <strong>Via API:</strong>
                <pre className="code-block">{`await fetch(
  'https://api.webflow.com/v2/sites/SITE_ID/pages/PAGE_ID/dom/ELEMENT_ID',
  {
    method: 'PATCH',
    headers: {
      'Authorization': 'Bearer TOKEN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nodes: [{
        nodeId: 'TEXT_NODE_ID',
        text: 'New text content'
      }]
    })
  }
);`}</pre>
              </div>
            </div>
          </div>

          <div className="component-mod">
            <h3>Changing Images</h3>
            <ol>
              <li>Select the image element in the component</li>
              <li>Click the image settings icon</li>
              <li>Upload a new image or choose from your assets</li>
              <li>Adjust alt text for accessibility</li>
            </ol>
          </div>

          <div className="component-mod">
            <h3>Modifying Links</h3>
            <ol>
              <li>Select the link or button element</li>
              <li>In the Settings panel, find the Link Settings</li>
              <li>Update the URL</li>
              <li>Choose whether to open in a new tab</li>
            </ol>
          </div>

          <div className="component-mod">
            <h3>Adjusting Layout</h3>
            <p>Use Flexbox and Grid controls in the Style panel:</p>
            <ul>
              <li><strong>Flexbox:</strong> Control alignment, direction, and spacing</li>
              <li><strong>Grid:</strong> Create complex layouts with rows and columns</li>
              <li><strong>Padding/Margin:</strong> Adjust spacing around elements</li>
              <li><strong>Width/Height:</strong> Control element dimensions</li>
            </ul>
          </div>
        </section>

        <section className="guide-section">
          <h2>Responsive Design</h2>
          <p>All components are responsive by default. Customize for different screen sizes:</p>

          <div className="breakpoints">
            <h4>Breakpoints</h4>
            <div className="breakpoint-grid">
              <div className="breakpoint-item">
                <div className="breakpoint-icon">📱</div>
                <strong>Mobile</strong>
                <code>&lt; 478px</code>
              </div>
              <div className="breakpoint-item">
                <div className="breakpoint-icon">📱</div>
                <strong>Mobile Landscape</strong>
                <code>479px - 767px</code>
              </div>
              <div className="breakpoint-item">
                <div className="breakpoint-icon">💻</div>
                <strong>Tablet</strong>
                <code>768px - 991px</code>
              </div>
              <div className="breakpoint-item">
                <div className="breakpoint-icon">🖥️</div>
                <strong>Desktop</strong>
                <code>&gt; 992px</code>
              </div>
            </div>
          </div>

          <div className="responsive-tips">
            <h4>Responsive Customization Tips</h4>
            <ul>
              <li>Use the breakpoint selector in the Designer toolbar</li>
              <li>Hide/show elements on specific breakpoints</li>
              <li>Adjust font sizes for better readability on mobile</li>
              <li>Stack columns vertically on smaller screens</li>
              <li>Reduce padding/margins on mobile to maximize space</li>
            </ul>
          </div>
        </section>

        <section className="guide-section">
          <h2>Creating Component Variants</h2>
          <p>Build your own variations of existing components:</p>

          <div className="variant-steps">
            <div className="variant-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Duplicate the Component</h4>
                <p>Right-click the component in the Components panel → Duplicate</p>
              </div>
            </div>
            <div className="variant-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Rename It</h4>
                <p>Give it a descriptive name like "Navbar V4" or "Hero Custom"</p>
              </div>
            </div>
            <div className="variant-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Customize</h4>
                <p>Modify colors, layout, typography, or add new elements</p>
              </div>
            </div>
            <div className="variant-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Save & Reuse</h4>
                <p>Your new variant is now available in the Components panel</p>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>Advanced Customization</h2>

          <div className="advanced-section">
            <h3>Custom CSS</h3>
            <p>Add custom CSS for advanced styling:</p>
            <ol>
              <li>Go to Site Settings → Custom Code</li>
              <li>Add your CSS in the Head Code section</li>
              <li>Use class names to target specific components</li>
            </ol>
            <pre className="code-block">{`<style>
  /* Custom button hover effect */
  .custom-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }
  
  /* Custom gradient background */
  .hero-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
</style>`}</pre>
          </div>

          <div className="advanced-section">
            <h3>Custom Interactions</h3>
            <p>Create animations and interactions in the Designer:</p>
            <ol>
              <li>Select an element</li>
              <li>Click the Interactions icon (lightning bolt)</li>
              <li>Create a new interaction trigger (hover, click, scroll, etc.)</li>
              <li>Add animations (move, scale, fade, etc.)</li>
            </ol>
          </div>

          <div className="advanced-section">
            <h3>JavaScript Integration</h3>
            <p>Add custom JavaScript for dynamic functionality:</p>
            <pre className="code-block">{`<script>
  // Example: Dynamic greeting based on time
  document.addEventListener('DOMContentLoaded', function() {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : 
                     hour < 18 ? 'Good afternoon' : 
                     'Good evening';
    
    document.querySelector('.greeting').textContent = greeting;
  });
</script>`}</pre>
          </div>
        </section>

        <section className="guide-section">
          <h2>Best Practices</h2>
          <div className="best-practices-grid">
            <div className="practice-card">
              <h4>🎨 Maintain Consistency</h4>
              <p>Use the design system variables instead of hardcoding values</p>
            </div>
            <div className="practice-card">
              <h4>📱 Test Responsiveness</h4>
              <p>Always preview on multiple devices before publishing</p>
            </div>
            <div className="practice-card">
              <h4>♿ Accessibility First</h4>
              <p>Add alt text to images, use semantic HTML, ensure color contrast</p>
            </div>
            <div className="practice-card">
              <h4>⚡ Optimize Performance</h4>
              <p>Compress images, minimize custom code, use system fonts when possible</p>
            </div>
            <div className="practice-card">
              <h4>🔄 Version Control</h4>
              <p>Use Webflow's backup feature before making major changes</p>
            </div>
            <div className="practice-card">
              <h4>📝 Document Changes</h4>
              <p>Keep notes on customizations for future reference</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>Common Customization Scenarios</h2>

          <details className="scenario">
            <summary>Changing the entire color scheme</summary>
            <div className="scenario-content">
              <ol>
                <li>Go to the Style Guide page</li>
                <li>Update all color variables to your brand colors</li>
                <li>Test on all pages to ensure consistency</li>
                <li>Adjust any components that need manual tweaking</li>
              </ol>
            </div>
          </details>

          <details className="scenario">
            <summary>Adding a logo to the navbar</summary>
            <div className="scenario-content">
              <ol>
                <li>Select the Navbar component on your page</li>
                <li>Find the logo placeholder element</li>
                <li>Upload your logo image</li>
                <li>Adjust size and spacing as needed</li>
                <li>Link it to your homepage</li>
              </ol>
            </div>
          </details>

          <details className="scenario">
            <summary>Creating a dark mode version</summary>
            <div className="scenario-content">
              <ol>
                <li>Duplicate your color variables</li>
                <li>Create dark mode versions (e.g., <code>--color-bg-dark</code>)</li>
                <li>Use CSS media query or JavaScript to toggle</li>
                <li>Test all components in dark mode</li>
              </ol>
              <pre className="code-block">{`@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #111827;
    --color-text: #f9fafb;
    --color-surface: #1f2937;
  }
}`}</pre>
            </div>
          </details>

          <details className="scenario">
            <summary>Localizing content for multiple languages</summary>
            <div className="scenario-content">
              <ol>
                <li>Enable localization in Site Settings</li>
                <li>Add your target languages</li>
                <li>Use the Webflow API to update content per locale</li>
                <li>Test language switching functionality</li>
              </ol>
            </div>
          </details>
        </section>

        <section className="guide-section">
          <h2>Need More Help?</h2>
          <div className="help-links">
            <Link href="/docs/getting-started" className="help-link">
              Getting Started Guide →
            </Link>
            <Link href="/docs/api-guide" className="help-link">
              API Reference →
            </Link>
            <Link href="/docs" className="help-link">
              Browse All Components →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
