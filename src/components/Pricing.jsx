import { useState } from 'react'
import './Pricing.css'

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [clickedIndex, setClickedIndex] = useState(null)

  const plans = [
    {
      tier: 'Starter',
      price: 'Free',
      description: 'Perfect for beginners and small projects.',
      features: ['Responsive layouts', 'Sticky navigation', 'Community support'],
      buttonText: 'Choose',
      buttonClass: 'btn--ghost',
      isFeatured: false
    },
    {
      tier: 'Pro',
      price: '₹1,999',
      period: '/month',
      description: 'For teams that iterate weekly.',
      features: ['Theme switching', 'Collaboration seats', 'Analytics dashboard'],
      buttonText: 'Start Pro',
      buttonClass: 'btn--primary',
      isFeatured: true
    },
    {
      tier: 'Enterprise',
      price: "Let's talk",
      description: 'Security and scale without compromise.',
      features: ['Custom SSO + RBAC', 'Uptime SLAs', 'Dedicated architect'],
      buttonText: 'Talk to us',
      buttonClass: 'btn--ghost',
      isFeatured: false
    }
  ]

  const handleClick = (index) => {
    setSelectedPlan(index)
    setClickedIndex(index)
    
    // Heavy responsive animation
    setTimeout(() => {
      setClickedIndex(null)
    }, 600)
    
    // Scroll to contact
    setTimeout(() => {
      const element = document.querySelector('#contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <section className="section" id="pricing">
      <div className="section__header">
        <p className="eyebrow">Pricing</p>
        <h2>Start now, scale when you're ready.</h2>
      </div>
      <div className="grid grid--three">
        {plans.map((plan, index) => (
          <article 
            key={index} 
            className={`card ${plan.isFeatured ? 'card--featured' : 'card--outline'} ${clickedIndex === index ? 'card--clicked' : ''} ${selectedPlan === index ? 'card--selected' : ''}`}
          >
            <p className="mono">{plan.tier}</p>
            <h3>
              {plan.price}
              {plan.period && <span>{plan.period}</span>}
            </h3>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button 
              className={`btn ${plan.buttonClass} full`} 
              onClick={() => handleClick(index)}
            >
              {plan.buttonText}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pricing

