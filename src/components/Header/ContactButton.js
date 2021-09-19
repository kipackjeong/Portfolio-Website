import './ContactButton.css'
const ContactButton = () => {
  return (
    <div className="contact-container">
      <figure>
        <a href="tel:8475108233">
          <div>
            <span style={{ fontWeight: 700 }}>Contact Me</span>
            <span>Here</span>
          </div>
        </a>
      </figure>
    </div>
  )
}

export default ContactButton
