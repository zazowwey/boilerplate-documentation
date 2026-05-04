import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Production Ready
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Build Faster with</span>
            <span className="title-line accent">Webflow Boilerplate</span>
          </h1>
          <p className="hero-subtitle">
            35 production-ready components designed for speed and flexibility. 
            Copy, customize, and ship beautiful websites in minutes, not days.
          </p>
          <div className="hero-buttons">
            <Link href="/docs" className="cta-button">
              Explore Components
              <span className="arrow">→</span>
            </Link>
            <Link href="/docs/getting-started" className="cta-button secondary">
              <span className="icon">📖</span>
              Quick Start
            </Link>
          </div>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">35</div>
            <div className="stat-label">Ready Components</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">11</div>
            <div className="stat-label">Categories</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Customizable</div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="section-header">
          <span className="section-badge">Features</span>
          <h2 className="section-title">Everything You Need</h2>
          <p className="section-subtitle">Built for developers who value speed without sacrificing quality</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Setup</h3>
            <p>Copy component IDs and start building. No configuration, no setup time, just pure productivity.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Design System</h3>
            <p>Consistent styling with variables and tokens. Customize colors, typography, and spacing globally.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>API-First</h3>
            <p>Full Webflow API integration. Modify everything programmatically with complete control.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive</h3>
            <p>Mobile-first components that adapt beautifully to any screen size and device.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Production Ready</h3>
            <p>Battle-tested components used in real projects. Ship with confidence.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Well Documented</h3>
            <p>Step-by-step guides for every component. Never get stuck again.</p>
          </div>
        </div>
      </div>

      <div className="categories-section">
        <div className="section-header">
          <span className="section-badge">Components</span>
          <h2 className="section-title">11 Component Categories</h2>
          <p className="section-subtitle">From navigation to footers, we've got you covered</p>
        </div>
        <div className="categories-grid">
          <div className="category-item">
            <div className="category-icon">🧭</div>
            <div className="category-name">Navigation</div>
            <div className="category-count">3 components</div>
          </div>
          <div className="category-item">
            <div className="category-icon">🎯</div>
            <div className="category-name">Hero Sections</div>
            <div className="category-count">3 components</div>
          </div>
          <div className="category-item">
            <div className="category-icon">💬</div>
            <div className="category-name">Testimonials</div>
            <div className="category-count">4 components</div>
          </div>
          <div className="category-item">
            <div className="category-icon">🎴</div>
            <div className="category-name">Cards</div>
            <div className="category-count">3 components</div>
          </div>
          <div className="category-item">
            <div className="category-icon">🔘</div>
            <div className="category-name">Buttons</div>
            <div className="category-count">3 components</div>
          </div>
          <div className="category-item">
            <div className="category-icon">📋</div>
            <div className="category-name">Forms</div>
            <div className="category-count">1 component</div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Join developers who are shipping faster with our component library</p>
          <div className="cta-buttons">
            <Link href="/docs" className="cta-button">
              Browse All Components
              <span className="arrow">→</span>
            </Link>
            <Link href="/docs/api-guide" className="cta-button secondary">
              View API Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
