import Link from 'next/link';

export default function GettingStartedPage() {
  return (
    <div className="docs-container">
      <header className="docs-header">
        <Link href="/docs" className="back-link">← Back to Components</Link>
        <h1 className="docs-title">Getting Started</h1>
        <p className="docs-subtitle">
          Learn how to use this Webflow boilerplate in 5 minutes
        </p>
      </header>

      <div className="guide-content">
        <section className="guide-section">
          <h2>What is This?</h2>
          <p>
            This is a <strong>Webflow component library</strong> — a collection of 32 pre-built, 
            production-ready components you can use to build websites faster. Think of it as your 
            design system starter kit.
          </p>
          <div className="info-box">
            <strong>New to Webflow?</strong> Webflow is a visual web design tool that generates 
            clean, production-ready code. You design visually, and Webflow handles the HTML, CSS, 
            and hosting.
          </div>
        </section>

        <section className="guide-section">
          <h2>Prerequisites</h2>
          <div className="checklist">
            <div className="checklist-item">
              <span className="check">✓</span>
              <div>
                <strong>Webflow Account</strong>
                <p>Sign up at <a href="https://webflow.com" target="_blank" rel="noopener">webflow.com</a> (free plan works)</p>
              </div>
            </div>
            <div className="checklist-item">
              <span className="check">✓</span>
              <div>
                <strong>API Access</strong>
                <p>Get your API token from Webflow workspace settings</p>
              </div>
            </div>
            <div className="checklist-item">
              <span className="check">✓</span>
              <div>
                <strong>Site ID</strong>
                <p>Your boilerplate site ID: <code>69eee5f6ab4b11ed16a92977</code></p>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>Quick Start: 3 Ways to Use Components</h2>
          
          <div className="method-card">
            <div className="method-number">1</div>
            <div className="method-content">
              <h3>Visual Editor (Easiest)</h3>
              <p>Use Webflow's Designer interface:</p>
              <ol>
                <li>Open your site in Webflow Designer</li>
                <li>Go to the Components panel (left sidebar)</li>
                <li>Drag any component onto your page</li>
                <li>Customize text, colors, and spacing visually</li>
              </ol>
              <div className="tip-box">
                <strong>💡 Tip:</strong> Components are organized by category (Navbar, Hero, Cards, etc.)
              </div>
            </div>
          </div>

          <div className="method-card">
            <div className="method-number">2</div>
            <div className="method-content">
              <h3>Copy from Style Guide</h3>
              <p>Browse the live style guide:</p>
              <ol>
                <li>Visit: <a href="https://tmint-boilerplate.webflow.io/style-guide" target="_blank" rel="noopener">tmint-boilerplate.webflow.io/style-guide</a></li>
                <li>Find the component you want</li>
                <li>Copy the component ID from the docs</li>
                <li>Insert it into your page using the Designer</li>
              </ol>
            </div>
          </div>

          <div className="method-card">
            <div className="method-number">3</div>
            <div className="method-content">
              <h3>API Integration (Advanced)</h3>
              <p>Programmatically insert components:</p>
              <pre className="code-block">{`// Example: Insert a Navbar component
const response = await fetch(
  'https://api.webflow.com/v2/sites/69eee5f6ab4b11ed16a92977/pages/[PAGE_ID]/dom',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_TOKEN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      componentId: '32588232-c267-9461-c94d-8633d3347075',
      slot: 'body'
    })
  }
);`}</pre>
              <Link href="/docs/api-guide" className="link-button">
                Read Full API Guide →
              </Link>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>Understanding Component Structure</h2>
          <p>Each component has:</p>
          <div className="structure-grid">
            <div className="structure-item">
              <div className="structure-icon">🆔</div>
              <h4>Unique ID</h4>
              <p>Used to reference the component via API or Designer</p>
            </div>
            <div className="structure-item">
              <div className="structure-icon">📁</div>
              <h4>Category</h4>
              <p>Organized by type (Navbar, Hero, Cards, etc.)</p>
            </div>
            <div className="structure-item">
              <div className="structure-icon">🎨</div>
              <h4>Variants</h4>
              <p>Multiple versions (V1, V2, V3) for different styles</p>
            </div>
            <div className="structure-item">
              <div className="structure-icon">⚙️</div>
              <h4>Properties</h4>
              <p>Customizable text, images, colors, and links</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>Your First Component</h2>
          <p>Let's add a Hero section to a page:</p>
          
          <div className="step-by-step">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Choose a Hero variant</h4>
                <p>Browse the <Link href="/docs#hero-sections">Hero Sections</Link> category</p>
                <p>Let's use <strong>Hero V1</strong> (ID: <code>dd47537e-7894-500c-3214-b43f67ed18bb</code>)</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Open Webflow Designer</h4>
                <p>Navigate to the page where you want to add the hero</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Insert the component</h4>
                <p>From the Components panel, find "Hero V1" and drag it onto your page</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>Customize</h4>
                <p>Click on text elements to edit. Use the Style panel to change colors and spacing.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4>Publish</h4>
                <p>Click "Publish" in the top-right corner to make your changes live</p>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>Next Steps</h2>
          <div className="next-steps-grid">
            <Link href="/docs" className="next-step-card">
              <h3>Browse Components</h3>
              <p>Explore all 32 components with descriptions and IDs</p>
              <span className="arrow">→</span>
            </Link>
            <Link href="/docs/customization" className="next-step-card">
              <h3>Customization Guide</h3>
              <p>Learn how to modify colors, fonts, and layouts</p>
              <span className="arrow">→</span>
            </Link>
            <Link href="/docs/api-guide" className="next-step-card">
              <h3>API Reference</h3>
              <p>Programmatic access for advanced workflows</p>
              <span className="arrow">→</span>
            </Link>
          </div>
        </section>

        <section className="guide-section help-section">
          <h2>Need Help?</h2>
          <p>Common questions:</p>
          <details className="faq-item">
            <summary>How do I change component colors?</summary>
            <p>
              Select the component in the Designer, then use the Style panel on the right. 
              You can change background colors, text colors, and border colors. For global 
              changes, edit the color variables in your site's style guide.
            </p>
          </details>
          <details className="faq-item">
            <summary>Can I use these components in multiple projects?</summary>
            <p>
              Yes! You can copy components between Webflow projects. In the Designer, 
              right-click a component and select "Copy", then paste it into another project.
            </p>
          </details>
          <details className="faq-item">
            <summary>Are these components responsive?</summary>
            <p>
              Yes, all components are built mobile-first and adapt to different screen sizes. 
              You can further customize breakpoints in the Designer.
            </p>
          </details>
          <details className="faq-item">
            <summary>How do I add my own components?</summary>
            <p>
              Create a new component in the Designer, then save it to your component library. 
              You can also use the API to programmatically create components.
            </p>
          </details>
        </section>
      </div>
    </div>
  );
}
