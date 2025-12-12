import './Footer.css'

const Footer = () => {
  const footerLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Support', href: '#' }
  ]

  return (
    <footer className="footer">
      <p>Built with React & Vite — Modern web experiences that stay in style.</p>
      <div className="footer__links">
        {footerLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer

