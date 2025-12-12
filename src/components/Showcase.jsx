import './Showcase.css'

const Showcase = () => {
  return (
    <section className="section section--alt" id="showcase">
      <div className="section__header">
        <p className="eyebrow">Showcase</p>
        <h2>Make users go “wow” on the first scroll.</h2>
        <p className="lede">Real interactions that prove the experience is fast, polished, and alive.</p>
      </div>
      <div className="showcase">
        <div className="showcase__panel">
          <div className="badge badge--pink">Live interaction</div>
          <h3>Scroll-reactive navigation</h3>
          <p>Navigation sticks, glows on hover, and updates as you move—designed to keep users oriented.</p>
          <div className="metrics">
            <div>
              <strong>60fps</strong>
              <span>smooth animations</span>
            </div>
            <div>
              <strong>0.2s</strong>
              <span>nav response</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>keyboard friendly</span>
            </div>
          </div>
        </div>
        <div className="showcase__panel">
          <div className="badge badge--blue">Design vibes</div>
          <h3>Theme playground</h3>
          <p>Switch palettes and gradients in real-time while typography and spacing stay perfect.</p>
          <div className="chips">
            <span>Midnight Neon</span>
            <span>Nordic Calm</span>
            <span>Sunset Pulse</span>
            <span>Minimal Fog</span>
          </div>
        </div>
        <div className="showcase__panel">
          <div className="badge badge--violet">Proof of speed</div>
          <h3>Performance you can feel</h3>
          <p>Optimized React + Vite stack with prefetching and light assets to keep pages snappy.</p>
          <div className="metrics metrics--inline">
            <div>
              <strong>98</strong>
              <span>Lighthouse perf</span>
            </div>
            <div>
              <strong>{'< 1s'}</strong>
              <span>first paint</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase

