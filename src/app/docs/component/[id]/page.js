import Link from 'next/link';
import { notFound } from 'next/navigation';
import CopyButton from './CopyButton';

export const dynamicParams = true;

export async function generateStaticParams() {
  const componentIds = [
    "32588232-c267-9461-c94d-8633d3347075", "b98c510c-85fc-29e6-d93f-7d465e748752",
    "4a1b894f-afe9-ae17-9012-a613bf5bdcd2", "dd47537e-7894-500c-3214-b43f67ed18bb",
    "0266e443-9a5b-8bd1-b964-dbe99787b7f7", "ba32312d-d662-19ff-a7e0-dad5f5f8b563",
    "6671fab5-2115-8f7a-2daf-dad627fedeb0", "a94f4ab5-4a41-f5e5-ef7b-94649ec6253e",
    "c4473492-add0-c34f-f2c0-4f1c0c7f4ed0", "fd504665-2604-a8cf-bb6a-e81153619d01",
    "5cad6dc2-5fe9-dd85-37a9-4eb3bc2739bc", "6bcd05b6-bd48-beb5-6608-6e9fa519a80a",
    "f6ef7dcf-5c30-78c3-7387-767e6a5e4b7f", "a0d3bea8-1d87-2bf8-7c22-928cceff516b",
    "904081eb-79d9-d239-e5c6-d3f8db8cce8d", "c6aa82c0-735e-c011-0ec1-c4360586a737",
    "226f316b-68ab-f212-8ee1-f4cd7ec5c1d9", "0266425e-cdfe-4768-ea9a-ad5ff1ad1fa5",
    "9b200972-350a-9426-7a79-e06bd512ec41", "41e04d11-b459-0a29-89c3-185f19b1dc48",
    "c19751a0-7255-316d-8650-f61c95f0559e", "f1812134-90b6-c795-7728-677dba36ee85",
    "4bf2ed2c-6ec9-17c6-0f09-1cef3b36999d", "fab3cfb8-f1f0-2df4-687c-8ea5528029c0",
    "fa024bd9-edc5-ef7d-ebe1-d06b9b60732f", "276079f5-ff91-ac11-4441-72d437bdff05",
    "786d4d0a-87cc-8658-bf4b-523fd0ffc222", "fab8056c-8f38-4c59-bbd4-053fde770bb4",
    "cf40687f-f01e-c8de-5668-803375c4b25f", "8fbd2663-45b1-4dba-23ce-c3be82a01183",
    "2fa44d9b-e221-b539-ce81-d09489d8116d", "32a7e285-3cbc-0b93-5ac4-2ad89001f5f4",
    "color-system", "typography", "layout-templates"
  ];
  
  return componentIds.map((id) => ({ id: id }));
}

const componentData = {
  "32588232-c267-9461-c94d-8633d3347075": { name: "Navbar V1", category: "Navigation", description: "Classic horizontal navigation" },
  "b98c510c-85fc-29e6-d93f-7d465e748752": { name: "Navbar V2", category: "Navigation", description: "Transparent overlay style" },
  "4a1b894f-afe9-ae17-9012-a613bf5bdcd2": { name: "Navbar V3", category: "Navigation", description: "Sidebar navigation" },
  "dd47537e-7894-500c-3214-b43f67ed18bb": { name: "Hero V1", category: "Hero Section", description: "Centered hero with CTA" },
  "0266e443-9a5b-8bd1-b964-dbe99787b7f7": { name: "Hero V2", category: "Hero Section", description: "Split layout with image" },
  "ba32312d-d662-19ff-a7e0-dad5f5f8b563": { name: "Hero V3", category: "Hero Section", description: "Full-screen video background" },
  "6671fab5-2115-8f7a-2daf-dad627fedeb0": { name: "About V1", category: "About Section", description: "Two-column layout" },
  "a94f4ab5-4a41-f5e5-ef7b-94649ec6253e": { name: "About V2", category: "About Section", description: "Timeline style" },
  "c4473492-add0-c34f-f2c0-4f1c0c7f4ed0": { name: "About V3", category: "About Section", description: "Grid with stats" },
  "fd504665-2604-a8cf-bb6a-e81153619d01": { name: "Testimonial V1", category: "Testimonials", description: "Card carousel" },
  "5cad6dc2-5fe9-dd85-37a9-4eb3bc2739bc": { name: "Testimonial V2", category: "Testimonials", description: "Grid layout" },
  "6bcd05b6-bd48-beb5-6608-6e9fa519a80a": { name: "Testimonial V3", category: "Testimonials", description: "Minimal quotes" },
  "f6ef7dcf-5c30-78c3-7387-767e6a5e4b7f": { name: "Testimonial V4", category: "Testimonials", description: "Video testimonials" },
  "a0d3bea8-1d87-2bf8-7c22-928cceff516b": { name: "Service V1", category: "Services", description: "Icon grid" },
  "904081eb-79d9-d239-e5c6-d3f8db8cce8d": { name: "Service V2", category: "Services", description: "Feature cards" },
  "c6aa82c0-735e-c011-0ec1-c4360586a737": { name: "Card V1", category: "Cards", description: "Basic card" },
  "226f316b-68ab-f212-8ee1-f4cd7ec5c1d9": { name: "Card V2", category: "Cards", description: "Hover effects" },
  "0266425e-cdfe-4768-ea9a-ad5ff1ad1fa5": { name: "Card V3", category: "Cards", description: "Pricing card" },
  "9b200972-350a-9426-7a79-e06bd512ec41": { name: "Primary Button V1", category: "Buttons", description: "Solid fill" },
  "41e04d11-b459-0a29-89c3-185f19b1dc48": { name: "Primary Button V2", category: "Buttons", description: "Gradient style" },
  "c19751a0-7255-316d-8650-f61c95f0559e": { name: "Secondary Button", category: "Buttons", description: "Outline style" },
  "f1812134-90b6-c795-7728-677dba36ee85": { name: "Modal V1", category: "Modals", description: "Center overlay" },
  "4bf2ed2c-6ec9-17c6-0f09-1cef3b36999d": { name: "Modal V2", category: "Modals", description: "Slide-in panel" },
  "fab3cfb8-f1f0-2df4-687c-8ea5528029c0": { name: "Notification V1", category: "Notifications", description: "Toast style" },
  "fa024bd9-edc5-ef7d-ebe1-d06b9b60732f": { name: "Notification V2", category: "Notifications", description: "Banner alert" },
  "276079f5-ff91-ac11-4441-72d437bdff05": { name: "Notification V3", category: "Notifications", description: "Inline message" },
  "786d4d0a-87cc-8658-bf4b-523fd0ffc222": { name: "Badge V1", category: "Badges", description: "Pill shape" },
  "fab8056c-8f38-4c59-bbd4-053fde770bb4": { name: "Badge V2", category: "Badges", description: "Dot indicator" },
  "cf40687f-f01e-c8de-5668-803375c4b25f": { name: "Footer V1", category: "Footer", description: "Multi-column" },
  "8fbd2663-45b1-4dba-23ce-c3be82a01183": { name: "Footer V2", category: "Footer", description: "Minimal centered" },
  "2fa44d9b-e221-b539-ce81-d09489d8116d": { name: "Form", category: "Forms", description: "Contact form" },
  "32a7e285-3cbc-0b93-5ac4-2ad89001f5f4": { name: "CTA", category: "CTA", description: "Call-to-action section" },
  "color-system": { name: "Color System", category: "Style Guide", description: "Base & neutral color palette templates" },
  "typography": { name: "Typography", category: "Style Guide", description: "Heading & body text style templates" },
  "layout-templates": { name: "Layout Templates", category: "Style Guide", description: "Section, container, and wrapper templates" },
};

const styleGuideSteps = {
  "color-system": {
    title: "Copy Color Palette",
    items: [
      "Go to <strong>\"Style Guide\"</strong> page in Webflow Designer",
      "Find the <strong>\"COLOR\"</strong> section",
      "You'll see Base Color (Seashell #FFF7EE) and Neutral Colors (Monochrome palette)",
      "Click on a color box you want to copy",
      "Press <strong>Ctrl+C</strong> (Windows) or <strong>Cmd+C</strong> (Mac)",
      "Go to your page and press <strong>Ctrl+V</strong> to paste",
      "Use these colors to maintain brand consistency"
    ],
    tip: "Copy individual color swatches or the entire color section to use across your site."
  },
  "typography": {
    title: "Copy Typography Styles",
    items: [
      "Go to <strong>\"Style Guide\"</strong> page",
      "Find the <strong>\"TYPOGRAPHY\"</strong> section",
      "You'll see Heading 1-6 and Body text 1-2 (all use Host Grotesk font)",
      "Click on any heading or text style you need",
      "Press <strong>Ctrl+C</strong> to copy",
      "Go to your page and press <strong>Ctrl+V</strong> to paste",
      "Double-click the text to edit the content"
    ],
    tip: "These pre-styled text elements keep your typography consistent. All use Host Grotesk Medium font."
  },
  "layout-templates": {
    title: "Copy Layout Templates",
    items: [
      "Go to <strong>\"Style Guide\"</strong> page",
      "Scroll to find layout sections: <strong>Section</strong>, <strong>Container Large/Small</strong>, or <strong>Content Wrapper</strong>",
      "Click on the layout element you need",
      "Press <strong>Ctrl+C</strong> to copy",
      "Go to your page and press <strong>Ctrl+V</strong> to paste",
      "Add your content inside these containers"
    ],
    tip: "Use these as starting structures for your content. They have pre-set spacing and responsive settings."
  }
};

export default async function ComponentDetailPage({ params }) {
  const { id } = await params;
  const component = componentData[id];
  
  if (!component) {
    notFound();
  }

  const isStyleGuideTemplate = ['color-system', 'typography', 'layout-templates', 'button-templates'].includes(id);
  const styleGuideData = isStyleGuideTemplate ? styleGuideSteps[id] : null;

  return (
    <div className="docs-container">
      <header className="docs-header">
        <div className="docs-header-inner">
          <div className="header-top">
            <Link href="/docs" className="back-link">← Back to Components</Link>
            <div className="component-badge">{component.category}</div>
          </div>
          <h1 className="docs-title">{component.name}</h1>
          <p className="docs-subtitle">{component.description}</p>
        </div>
      </header>

      <div className="component-detail-wrapper">
        <div className="component-detail">
        {!isStyleGuideTemplate && (
          <section className="detail-section">
            <h2>Component ID</h2>
            <div className="id-box">
              <code>{id}</code>
              <CopyButton text={id} />
            </div>
          </section>
        )}

        <section className="detail-section">
          <h2>How to Use This Template</h2>
          <p>This is a ready-to-use {isStyleGuideTemplate ? 'design system template' : 'website section'}. Follow this simple guide to add it to your site - no coding needed!</p>
          
          <div className="info-box">
            <strong>🎨 What is this?</strong> This boilerplate is a template library with 36 ready-to-use components. Components are located in 2 pages: some in <strong>"Sections"</strong> page and some in <strong>"Style Guide"</strong> page. You'll copy templates from these pages and paste them into your own pages.
          </div>
          
          <div className="tip-box">
            <strong>📌 Where to find this template:</strong><br/>
            {isStyleGuideTemplate ? (
              <>
                <strong>{component.name}</strong> is located in the <strong>"Style Guide"</strong> page (/style-guide).<br/>
                Look for the section labeled with this template name.
              </>
            ) : (
              <>
                Your Webflow project has 2 template pages:<br/>
                • <strong>"Sections"</strong> (/) - Contains some components<br/>
                • <strong>"Style Guide"</strong> (/style-guide) - Contains other components<br/>
                <br/>
                <strong>For {component.name}:</strong> Look for it in both pages. It will be clearly labeled with its name.
              </>
            )}
          </div>

          {isStyleGuideTemplate ? (
            <div className="tutorial-steps">
              <div className="tutorial-step">
                <div className="step-number">📋</div>
                <div className="step-content">
                  <h4>{styleGuideData.title}</h4>
                  <ol>
                    {styleGuideData.items.map((item, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ol>
                  <div className="tip-box">
                    <strong>💡 Tip:</strong> {styleGuideData.tip}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="tutorial-steps">
              <div className="tutorial-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Open Your Webflow Project</h4>
                  <ul>
                    <li>Log in to Webflow</li>
                    <li>Open your project in the Designer (the visual editor)</li>
                  </ul>
                </div>
              </div>

              <div className="tutorial-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Find the Component</h4>
                  <ol>
                    <li>Look at the left sidebar → Pages panel</li>
                    <li>Open <strong>"Sections"</strong> page first - check if <strong>{component.name}</strong> is there</li>
                    <li>If not found, open <strong>"Style Guide"</strong> page - the component will be there</li>
                    <li>Scroll to find the <strong>{component.name}</strong> component</li>
                  </ol>
                  <div className="tip-box">
                    <strong>💡 Tip:</strong> Components are split between 2 pages. If you don't see it in "Sections", check "Style Guide" page.
                  </div>
                </div>
              </div>

              <div className="tutorial-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Copy the Component</h4>
                  <ol>
                    <li>Click on the <strong>{component.name}</strong> component (you'll see a blue outline)</li>
                    <li>Make sure you select the whole component, not just text inside</li>
                    <li>Press <strong>Ctrl+C</strong> (Windows) or <strong>Cmd+C</strong> (Mac)</li>
                  </ol>
                  <div className="tip-box">
                    <strong>💡 Tip:</strong> If you accidentally select text only, click outside and try again. You need to select the entire component container.
                  </div>
                </div>
              </div>

              <div className="tutorial-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Go to Your Page</h4>
                  <ol>
                    <li>Open Pages panel again</li>
                    <li>Click on your target page (Home, About, etc.)</li>
                  </ol>
                </div>
              </div>

              <div className="tutorial-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Paste It</h4>
                  <ol>
                    <li>Click where you want the section</li>
                    <li>Press <strong>Ctrl+V</strong> (Windows) or <strong>Cmd+V</strong> (Mac)</li>
                    <li>Done! The section is now on your page</li>
                  </ol>
                </div>
              </div>

              <div className="tutorial-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h4>Edit Text</h4>
                  <ol>
                    <li><strong>Double-click</strong> any text to edit it</li>
                    <li>Type your new text</li>
                    <li>Press Enter to save</li>
                  </ol>
                </div>
              </div>

              <div className="tutorial-step">
                <div className="step-number">7</div>
                <div className="step-content">
                  <h4>Change Colors</h4>
                  <ol>
                    <li>Click on an element (background, text, button)</li>
                    <li>Look at right sidebar → Style panel</li>
                    <li>Find "Background" or "Typography" section</li>
                    <li>Click color box → Choose your color</li>
                  </ol>
                </div>
              </div>

              <div className="tutorial-step">
                <div className="step-number">8</div>
                <div className="step-content">
                  <h4>Replace Images</h4>
                  <ol>
                    <li>Click on any image</li>
                    <li>Click gear icon in right sidebar</li>
                    <li>Upload your image or choose from assets</li>
                    <li>Add alt text (image description)</li>
                  </ol>
                </div>
              </div>

              <div className="tutorial-step">
                <div className="step-number">9</div>
                <div className="step-content">
                  <h4>Update Links</h4>
                  <ol>
                    <li>Click on a button or link</li>
                    <li>Look at left sidebar → Link Settings</li>
                    <li>Choose type (URL, Page, Email, Phone)</li>
                    <li>Enter destination</li>
                  </ol>
                </div>
              </div>

              <div className="tutorial-step">
                <div className="step-number">10</div>
                <div className="step-content">
                  <h4>Check Mobile View</h4>
                  <ol>
                    <li>Click device icons at top (tablet, phone)</li>
                    <li>Adjust if needed for smaller screens</li>
                    <li>Click desktop icon to go back</li>
                  </ol>
                </div>
              </div>

              <div className="tutorial-step">
                <div className="step-number">11</div>
                <div className="step-content">
                  <h4>Preview</h4>
                  <ol>
                    <li>Click eye icon (Preview) at top</li>
                    <li>Test all buttons and links</li>
                    <li>Close preview when done</li>
                  </ol>
                </div>
              </div>

              <div className="tutorial-step">
                <div className="step-number">12</div>
                <div className="step-content">
                  <h4>Publish</h4>
                  <ol>
                    <li>Click <strong>Publish</strong> button (top-right)</li>
                    <li>Click "Publish to Selected Domains"</li>
                    <li>Wait 10-30 seconds</li>
                    <li>Your changes are now live! 🎉</li>
                  </ol>
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="detail-section">
          <h2>What You Can Customize</h2>
          
          <div className="customization-grid">
            <div className="custom-option">
              <h4>✏️ Text</h4>
              <p>Double-click to edit headlines, paragraphs, and button text.</p>
            </div>
            <div className="custom-option">
              <h4>🎨 Colors</h4>
              <p>Change backgrounds, text colors, and button colors to match your brand.</p>
            </div>
            <div className="custom-option">
              <h4>🖼️ Images</h4>
              <p>Replace with your own photos, logos, or graphics.</p>
            </div>
            <div className="custom-option">
              <h4>🔗 Links</h4>
              <p>Update where buttons and links go.</p>
            </div>
            <div className="custom-option">
              <h4>📐 Spacing</h4>
              <p>Adjust padding and margins to control white space.</p>
            </div>
            <div className="custom-option">
              <h4>📱 Mobile</h4>
              <p>Customize how it looks on phones and tablets.</p>
            </div>
          </div>
        </section>

        <section className="detail-section help-section">
          <h2>Need Help?</h2>
          <div className="help-links">
            <a href="https://university.webflow.com" target="_blank" rel="noopener" className="help-link">
              🎥 Watch Video Tutorials
            </a>
            <a href="https://forum.webflow.com" target="_blank" rel="noopener" className="help-link">
              💬 Ask in Community Forum
            </a>
            <a href="https://university.webflow.com/docs" target="_blank" rel="noopener" className="help-link">
              📚 Read Documentation
            </a>
            <Link href="/docs/getting-started" className="help-link">
              📖 Getting Started Guide
            </Link>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}
