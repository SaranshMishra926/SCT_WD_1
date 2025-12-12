import './Hero.css'

const Hero = () => {
  const handleScroll = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <p className="eyebrow">Modern Web Solutions</p>
        <h1>Build stunning, responsive websites faster than ever.</h1>
        <p className="lede">
          A complete landing page solution with interactive navigation, modern design, and seamless user experience—all built with React.
        </p>
        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => handleScroll('#pricing')}>
            Get started
          </button>
          <button className="btn btn--ghost" onClick={() => handleScroll('#showcase')}>
            See it in action
          </button>
        </div>
        <div className="hero__meta">
          <div>
            <strong>240k+</strong>
            <span>creations shipped</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>customer satisfaction</span>
          </div>
          <div>
            <strong>120+</strong>
            <span>integrations</span>
          </div>
        </div>
      </div>
      <div className="hero__visual">
        <div className="glass-card">
          <p className="mono">Live preview</p>
          <h3>Interactive Navigation</h3>
          <p>Smart menus that respond to scroll, hover, and user interaction—built with React hooks.</p>
          <div className="pill-group">
            <span className="pill pill--blue">Sticky</span>
            <span className="pill pill--pink">Hover aware</span>
            <span className="pill pill--violet">Scroll reactive</span>
          </div>
          <div className="progress">
            <span style={{ width: '86%' }}></span>
          </div>
          <div className="avatars">
            <div className="avatar">A</div>
            <div className="avatar">J</div>
            <div className="avatar">K</div>
            <div className="avatar">S</div>
            <span className="tag">+32 online</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

