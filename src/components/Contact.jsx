import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="section section--alt contact" id="contact">
      <div className="contact__card">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Ready to build an unforgettable landing page?</h2>
          <p className="lede">
            Tell us about your project and we'll create a tailored solution for you.
          </p>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Eg: Saransh Mishra"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Work email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Eg: xyz@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">What are you building?</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="A Beautiful Website for your Business?"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn--primary">
            Send it
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

