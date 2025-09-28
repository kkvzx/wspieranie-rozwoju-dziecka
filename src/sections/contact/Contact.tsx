import { Sections } from '../../constants/sections'
import contactText from './translation.json'
import FloatingShape from '../../components/floatingShape/FloatingShape'
import { FloatingShapeSize } from '../../components/floatingShape/constants/floatingShapeSize'
import { FloatingShapeColor } from '../../components/floatingShape/constants/floatingShapeColor'
import { FloatingShapeAnimation } from '../../components/floatingShape/constants/floatingShapeAnimation'
import './Contact.css'
import { decodeText } from '../../utils/textDecoder.ts'
import { useEffect } from 'react'
import { ENCODED_EMAIL_ADDRESS, ENCODED_PHONE_NUMBER } from '../../constants/contact.ts'

const BASE_URL = 'https://formsubmit.co/'

const getUrl = (encodedEmail: string) => {
  const decodedEmail = decodeText(encodedEmail)

  return BASE_URL + decodedEmail
}

const Contact = () => {
  const emailContactFormId = 'email-contact-form'

  // Note: Protection against some webscrapers
  useEffect(() => {
    const contactForm = document.getElementById(emailContactFormId) as HTMLFormElement | undefined
    if (!contactForm) {
      return
    }

    contactForm.action = getUrl(ENCODED_EMAIL_ADDRESS)
  }, [])

  return (
    <section id={Sections.Contact} className="contact-section section">
      <FloatingShape
        size={FloatingShapeSize.Md}
        color={FloatingShapeColor.Primary}
        position={{ top: '15%', left: '5%' }}
        animation={FloatingShapeAnimation.Float}
        duration={5}
        delay={0.5}
      />
      <FloatingShape
        size={FloatingShapeSize.Sm}
        color={FloatingShapeColor.Accent}
        position={{ top: '60%', right: '8%' }}
        animation={FloatingShapeAnimation.Pulse}
        duration={4}
        delay={2}
      />
      <FloatingShape
        size={FloatingShapeSize.Xxlg}
        color={FloatingShapeColor.Secondary}
        position={{ bottom: '10%', left: '-50px' }}
        animation={FloatingShapeAnimation.FloatReverse}
        duration={6}
        delay={1}
      />
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{contactText.title}</h2>
          <p className="section-subtitle text-large">{contactText.subtitle}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">{contactText.info.title}</h3>
            <p className="contact-info-text">{contactText.info.description}</p>

            <div className="contact-details">
              <div className="contact-item">
                <h4 className="contact-item-title">{contactText.info.details.email_label}</h4>
                <a data-encoded-email={ENCODED_EMAIL_ADDRESS} className="contact-link">
                  {contactText.info.details.loading}
                </a>
              </div>

              <div className="contact-item">
                <h4 className="contact-item-title">{contactText.info.details.phone_label}</h4>
                <a data-encoded-phone={ENCODED_PHONE_NUMBER} className="contact-link">
                  {contactText.info.details.loading}
                </a>
              </div>

              <div className="contact-item">
                <h4 className="contact-item-title">{contactText.info.details.hours.label}</h4>
                <p className="contact-text">
                  {contactText.info.details.hours.value.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <form id={emailContactFormId} className="contact-form-container" method="POST">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                {contactText.form.labels.name}
              </label>
              <input type="text" id="name" name="name" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                {contactText.form.labels.email}
              </label>
              <input type="email" id="email" name="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                {contactText.form.labels.phone}
              </label>
              <input type="phone" id="phone" name="phone" className="form-input" />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                {contactText.form.labels.subject}
              </label>
              <input type="text" id="subject" name="subject" className="form-input" required />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                {contactText.form.labels.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="form-textarea"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg">
              {contactText.form.submitButton}
            </button>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1877.466094839167!2d18.53285880802459!3d54.520828069685024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda70e29b88a8f%3A0xfae4b44cd6fcf4fd!2sGabinet%20Wspierania%20Rozwoju%20Dziecka.%20Sylwia%20Kazusek!5e0!3m2!1sen!2spl!4v1759074001069!5m2!1sen!2spl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokalizacja gabinetu"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
