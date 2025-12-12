import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Adaptive navigation',
      description: 'Sticky menus that adjust styling on scroll and hover to keep users oriented.',
      iconClass: 'icon--blue'
    },
    {
      icon: '🎨',
      title: 'Design system ready',
      description: 'Tokens, gradients, and glassmorphism components that stay consistent everywhere.',
      iconClass: 'icon--pink'
    },
    {
      icon: '🔒',
      title: 'Enterprise secure',
      description: 'SSO, audit logs, and role controls baked in so you ship with confidence.',
      iconClass: 'icon--violet'
    }
  ]

  return (
    <section className="section" id="features">
      <div className="section__header">
        <p className="eyebrow">Why Choose Us</p>
        <h2>Experience-led design with speed built in.</h2>
        <p className="lede">
          From interactive navigation to full-page storytelling, build responsive flows that feel effortless.
        </p>
      </div>
      <div className="grid grid--three">
        {features.map((feature, index) => (
          <article key={index} className="card">
            <div className={`icon ${feature.iconClass}`}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features

