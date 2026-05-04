import Link from 'next/link';

const components = [
  {
    category: "Navigation",
    icon: "🧭",
    items: [
      { id: "32588232-c267-9461-c94d-8633d3347075", name: "Navbar V1", description: "Classic horizontal navigation" },
      { id: "b98c510c-85fc-29e6-d93f-7d465e748752", name: "Navbar V2", description: "Transparent overlay style" },
      { id: "4a1b894f-afe9-ae17-9012-a613bf5bdcd2", name: "Navbar V3", description: "Sidebar navigation" }
    ]
  },
  {
    category: "Hero Sections",
    icon: "🎯",
    items: [
      { id: "dd47537e-7894-500c-3214-b43f67ed18bb", name: "Hero V1", description: "Centered with CTA" },
      { id: "0266e443-9a5b-8bd1-b964-dbe99787b7f7", name: "Hero V2", description: "Split layout with image" },
      { id: "ba32312d-d662-19ff-a7e0-dad5f5f8b563", name: "Hero V3", description: "Full-screen video background" }
    ]
  },
  {
    category: "About Sections",
    icon: "📖",
    items: [
      { id: "6671fab5-2115-8f7a-2daf-dad627fedeb0", name: "About V1", description: "Two-column layout" },
      { id: "a94f4ab5-4a41-f5e5-ef7b-94649ec6253e", name: "About V2", description: "Timeline style" },
      { id: "c4473492-add0-c34f-f2c0-4f1c0c7f4ed0", name: "About V3", description: "Grid with stats" }
    ]
  },
  {
    category: "Testimonials",
    icon: "💬",
    items: [
      { id: "fd504665-2604-a8cf-bb6a-e81153619d01", name: "Testimonial V1", description: "Card carousel" },
      { id: "5cad6dc2-5fe9-dd85-37a9-4eb3bc2739bc", name: "Testimonial V2", description: "Grid layout" },
      { id: "6bcd05b6-bd48-beb5-6608-6e9fa519a80a", name: "Testimonial V3", description: "Minimal quotes" },
      { id: "f6ef7dcf-5c30-78c3-7387-767e6a5e4b7f", name: "Testimonial V4", description: "Video testimonials" }
    ]
  },
  {
    category: "Services",
    icon: "⚙️",
    items: [
      { id: "a0d3bea8-1d87-2bf8-7c22-928cceff516b", name: "Service V1", description: "Icon grid" },
      { id: "904081eb-79d9-d239-e5c6-d3f8db8cce8d", name: "Service V2", description: "Feature cards" }
    ]
  },
  {
    category: "Cards",
    icon: "🎴",
    items: [
      { id: "c6aa82c0-735e-c011-0ec1-c4360586a737", name: "Card V1", description: "Basic card with image" },
      { id: "226f316b-68ab-f212-8ee1-f4cd7ec5c1d9", name: "Card V2", description: "Hover effects" },
      { id: "0266425e-cdfe-4768-ea9a-ad5ff1ad1fa5", name: "Card V3", description: "Pricing card" }
    ]
  },
  {
    category: "Buttons",
    icon: "🔘",
    items: [
      { id: "9b200972-350a-9426-7a79-e06bd512ec41", name: "Primary Button V1", description: "Solid fill" },
      { id: "41e04d11-b459-0a29-89c3-185f19b1dc48", name: "Primary Button V2", description: "Gradient style" },
      { id: "c19751a0-7255-316d-8650-f61c95f0559e", name: "Secondary Button", description: "Outline style" }
    ]
  },
  {
    category: "Modals",
    icon: "🪟",
    items: [
      { id: "f1812134-90b6-c795-7728-677dba36ee85", name: "Modal V1", description: "Center overlay" },
      { id: "4bf2ed2c-6ec9-17c6-0f09-1cef3b36999d", name: "Modal V2", description: "Slide-in panel" }
    ]
  },
  {
    category: "Notifications",
    icon: "🔔",
    items: [
      { id: "fab3cfb8-f1f0-2df4-687c-8ea5528029c0", name: "Notification V1", description: "Toast style" },
      { id: "fa024bd9-edc5-ef7d-ebe1-d06b9b60732f", name: "Notification V2", description: "Banner alert" },
      { id: "276079f5-ff91-ac11-4441-72d437bdff05", name: "Notification V3", description: "Inline message" }
    ]
  },
  {
    category: "Badges",
    icon: "🏷️",
    items: [
      { id: "786d4d0a-87cc-8658-bf4b-523fd0ffc222", name: "Badge V1", description: "Pill shape" },
      { id: "fab8056c-8f38-4c59-bbd4-053fde770bb4", name: "Badge V2", description: "Dot indicator" }
    ]
  },
  {
    category: "Footer",
    icon: "⬇️",
    items: [
      { id: "cf40687f-f01e-c8de-5668-803375c4b25f", name: "Footer V1", description: "Multi-column" },
      { id: "8fbd2663-45b1-4dba-23ce-c3be82a01183", name: "Footer V2", description: "Minimal centered" }
    ]
  },
  {
    category: "Forms & CTA",
    icon: "📝",
    items: [
      { id: "2fa44d9b-e221-b539-ce81-d09489d8116d", name: "Form", description: "Contact form" },
      { id: "32a7e285-3cbc-0b93-5ac4-2ad89001f5f4", name: "CTA", description: "Call-to-action section" }
    ]
  },
  {
    category: "Style Guide",
    icon: "🎨",
    items: [
      { id: "color-system", name: "Color System", description: "Base & neutral color palette" },
      { id: "typography", name: "Typography", description: "Heading & body text styles" },
      { id: "layout-templates", name: "Layout Templates", description: "Section, container, wrapper" }
    ]
  }
];

export default function DocsPage() {
  return (
    <div className="docs-container">
      <header className="docs-header">
        <Link href="/" className="back-link">← Home</Link>
        <h1 className="docs-title">Component Library</h1>
        <p className="docs-subtitle">
          Browse all 36 components including style guide templates. Click any component to see implementation details.
        </p>
      </header>

      <div className="docs-content">
        <aside className="docs-sidebar">
          <nav className="sidebar-nav">
            <div className="nav-section">
              <div className="nav-label">Quick Links</div>
              <Link href="/docs/getting-started" className="nav-link">Getting Started</Link>
              <Link href="/docs/api-guide" className="nav-link">API Guide</Link>
              <Link href="/docs/customization" className="nav-link">Customization</Link>
            </div>
            <div className="nav-section">
              <div className="nav-label">Categories</div>
              {components.map((cat) => (
                <a key={cat.category} href={`#${cat.category.toLowerCase().replace(/\s+/g, '-')}`} className="nav-link">
                  {cat.icon} {cat.category}
                </a>
              ))}
            </div>
          </nav>
        </aside>

        <main className="docs-main">
          {components.map((category) => (
            <section key={category.category} id={category.category.toLowerCase().replace(/\s+/g, '-')} className="component-section">
              <h2 className="category-title">
                <span className="category-icon">{category.icon}</span>
                {category.category}
              </h2>
              <div className="component-grid">
                {category.items.map((component) => (
                  <Link 
                    key={component.id} 
                    href={`/docs/component/${component.id}`}
                    className="component-card"
                  >
                    <div className="component-header">
                      <h3 className="component-name">{component.name}</h3>
                      <span className="component-arrow">→</span>
                    </div>
                    <p className="component-description">{component.description}</p>
                    <div className="component-id">
                      <code>{component.id}</code>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
