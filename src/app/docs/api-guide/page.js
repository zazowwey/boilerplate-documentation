import Link from 'next/link';

export default function APIGuidePage() {
  return (
    <div className="docs-container">
      <header className="docs-header">
        <Link href="/docs" className="back-link">← Back to Components</Link>
        <h1 className="docs-title">API Guide</h1>
        <p className="docs-subtitle">
          Programmatic access to your Webflow boilerplate
        </p>
      </header>

      <div className="guide-content">
        <section className="guide-section">
          <h2>Authentication</h2>
          <p>All API requests require authentication using your Webflow API token.</p>
          
          <div className="step-by-step">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Get Your API Token</h4>
                <p>Go to Webflow workspace settings → Integrations → API Access</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Store Securely</h4>
                <p>Add to your <code>.env.local</code> file:</p>
                <pre className="code-block">{`WEBFLOW_API_TOKEN=your_token_here
WEBFLOW_SITE_ID=69eee5f6ab4b11ed16a92977`}</pre>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>Site Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Site ID</div>
              <code className="info-value">69eee5f6ab4b11ed16a92977</code>
            </div>
            <div className="info-item">
              <div className="info-label">Site Name</div>
              <code className="info-value">Boilerplate</code>
            </div>
            <div className="info-item">
              <div className="info-label">Workspace ID</div>
              <code className="info-value">69eee5bbd20fd84e29b3ec9f</code>
            </div>
            <div className="info-item">
              <div className="info-label">Published URL</div>
              <a href="https://tmint-boilerplate.webflow.io" target="_blank" rel="noopener" className="info-value">
                tmint-boilerplate.webflow.io
              </a>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>Common Operations</h2>

          <div className="api-operation">
            <h3>List All Components</h3>
            <p>Get all available components in the site</p>
            <pre className="code-block">{`const response = await fetch(
  'https://api.webflow.com/v2/sites/69eee5f6ab4b11ed16a92977/components',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_TOKEN',
      'accept': 'application/json'
    }
  }
);

const data = await response.json();
console.log(data.components); // Array of 32 components`}</pre>
          </div>

          <div className="api-operation">
            <h3>Get Component Details</h3>
            <p>Retrieve specific component information</p>
            <pre className="code-block">{`// Example: Get Navbar V1 details
const componentId = '32588232-c267-9461-c94d-8633d3347075';

const response = await fetch(
  \`https://api.webflow.com/v2/sites/69eee5f6ab4b11ed16a92977/components/\${componentId}\`,
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_TOKEN',
      'accept': 'application/json'
    }
  }
);

const component = await response.json();`}</pre>
          </div>

          <div className="api-operation">
            <h3>List Pages</h3>
            <p>Get all pages in the site</p>
            <pre className="code-block">{`const response = await fetch(
  'https://api.webflow.com/v2/sites/69eee5f6ab4b11ed16a92977/pages',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_TOKEN',
      'accept': 'application/json'
    }
  }
);

const data = await response.json();
// Returns: Sections page (/) and Style Guide page (/style-guide)`}</pre>
          </div>

          <div className="api-operation">
            <h3>Insert Component Instance</h3>
            <p>Add a component to a page programmatically</p>
            <pre className="code-block">{`// Insert Hero V1 component
const response = await fetch(
  'https://api.webflow.com/v2/sites/69eee5f6ab4b11ed16a92977/pages/PAGE_ID/dom',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_TOKEN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      componentId: 'dd47537e-7894-500c-3214-b43f67ed18bb',
      parentElementId: 'PARENT_ELEMENT_ID',
      slot: 'children'
    })
  }
);`}</pre>
          </div>

          <div className="api-operation">
            <h3>Update Component Content</h3>
            <p>Modify text and properties of a component instance</p>
            <pre className="code-block">{`const response = await fetch(
  'https://api.webflow.com/v2/sites/69eee5f6ab4b11ed16a92977/pages/PAGE_ID/dom/ELEMENT_ID',
  {
    method: 'PATCH',
    headers: {
      'Authorization': 'Bearer YOUR_API_TOKEN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nodes: [
        {
          nodeId: 'TEXT_NODE_ID',
          text: 'Updated heading text'
        }
      ]
    })
  }
);`}</pre>
          </div>

          <div className="api-operation">
            <h3>Publish Site</h3>
            <p>Deploy your changes to production</p>
            <pre className="code-block">{`const response = await fetch(
  'https://api.webflow.com/v2/sites/69eee5f6ab4b11ed16a92977/publish',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_TOKEN',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      publishToWebflowSubdomain: true
    })
  }
);`}</pre>
          </div>
        </section>

        <section className="guide-section">
          <h2>Component IDs Reference</h2>
          <p>Quick reference for all component IDs:</p>
          
          <div className="id-reference">
            <h4>Navigation</h4>
            <ul className="id-list">
              <li><code>32588232-c267-9461-c94d-8633d3347075</code> — Navbar V1</li>
              <li><code>b98c510c-85fc-29e6-d93f-7d465e748752</code> — Navbar V2</li>
              <li><code>4a1b894f-afe9-ae17-9012-a613bf5bdcd2</code> — Navbar V3</li>
            </ul>

            <h4>Hero Sections</h4>
            <ul className="id-list">
              <li><code>dd47537e-7894-500c-3214-b43f67ed18bb</code> — Hero V1</li>
              <li><code>0266e443-9a5b-8bd1-b964-dbe99787b7f7</code> — Hero V2</li>
              <li><code>ba32312d-d662-19ff-a7e0-dad5f5f8b563</code> — Hero V3</li>
            </ul>

            <h4>Buttons</h4>
            <ul className="id-list">
              <li><code>9b200972-350a-9426-7a79-e06bd512ec41</code> — Primary Button V1</li>
              <li><code>41e04d11-b459-0a29-89c3-185f19b1dc48</code> — Primary Button V2</li>
              <li><code>c19751a0-7255-316d-8650-f61c95f0559e</code> — Secondary Button</li>
            </ul>

            <h4>Cards</h4>
            <ul className="id-list">
              <li><code>c6aa82c0-735e-c011-0ec1-c4360586a737</code> — Card V1</li>
              <li><code>226f316b-68ab-f212-8ee1-f4cd7ec5c1d9</code> — Card V2</li>
              <li><code>0266425e-cdfe-4768-ea9a-ad5ff1ad1fa5</code> — Card V3</li>
            </ul>

            <details className="id-details">
              <summary>View All 32 Component IDs</summary>
              <div className="all-ids">
                <p><Link href="/docs">See full component list with descriptions →</Link></p>
              </div>
            </details>
          </div>
        </section>

        <section className="guide-section">
          <h2>Node.js Example</h2>
          <p>Complete example using Node.js:</p>
          <pre className="code-block">{`// webflow-client.js
import fetch from 'node-fetch';

const SITE_ID = '69eee5f6ab4b11ed16a92977';
const API_TOKEN = process.env.WEBFLOW_API_TOKEN;

class WebflowClient {
  constructor() {
    this.baseUrl = 'https://api.webflow.com/v2';
    this.headers = {
      'Authorization': \`Bearer \${API_TOKEN}\`,
      'accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }

  async getComponents() {
    const response = await fetch(
      \`\${this.baseUrl}/sites/\${SITE_ID}/components\`,
      { headers: this.headers }
    );
    return response.json();
  }

  async getPages() {
    const response = await fetch(
      \`\${this.baseUrl}/sites/\${SITE_ID}/pages\`,
      { headers: this.headers }
    );
    return response.json();
  }

  async insertComponent(pageId, componentId, parentElementId) {
    const response = await fetch(
      \`\${this.baseUrl}/sites/\${SITE_ID}/pages/\${pageId}/dom\`,
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          componentId,
          parentElementId,
          slot: 'children'
        })
      }
    );
    return response.json();
  }

  async publish() {
    const response = await fetch(
      \`\${this.baseUrl}/sites/\${SITE_ID}/publish\`,
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          publishToWebflowSubdomain: true
        })
      }
    );
    return response.json();
  }
}

// Usage
const client = new WebflowClient();

// Get all components
const components = await client.getComponents();
console.log(\`Found \${components.components.length} components\`);

// Insert a hero component
await client.insertComponent(
  'PAGE_ID',
  'dd47537e-7894-500c-3214-b43f67ed18bb', // Hero V1
  'PARENT_ELEMENT_ID'
);

// Publish changes
await client.publish();`}</pre>
        </section>

        <section className="guide-section">
          <h2>Rate Limits & Best Practices</h2>
          <div className="best-practices">
            <div className="practice-item">
              <h4>⏱️ Rate Limits</h4>
              <p>Webflow API has rate limits. Implement exponential backoff for retries.</p>
            </div>
            <div className="practice-item">
              <h4>🔒 Security</h4>
              <p>Never expose API tokens in client-side code. Use environment variables.</p>
            </div>
            <div className="practice-item">
              <h4>📦 Batch Operations</h4>
              <p>Group multiple updates together to minimize API calls.</p>
            </div>
            <div className="practice-item">
              <h4>✅ Error Handling</h4>
              <p>Always check response status and handle errors gracefully.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>Resources</h2>
          <ul className="resource-list">
            <li>
              <a href="https://developers.webflow.com" target="_blank" rel="noopener">
                Official Webflow API Documentation
              </a>
            </li>
            <li>
              <a href="https://developers.webflow.com/reference/rest-introduction" target="_blank" rel="noopener">
                REST API Reference
              </a>
            </li>
            <li>
              <Link href="/docs/getting-started">
                Getting Started Guide
              </Link>
            </li>
            <li>
              <Link href="/docs/customization">
                Customization Guide
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
