import { Sections } from '../../constants/sections'
import footerText from './translation.json'
import FloatingShape from '../../components/floatingShape/FloatingShape'
import { FloatingShapeSize } from '../../components/floatingShape/constants/floatingShapeSize'
import { FloatingShapeColor } from '../../components/floatingShape/constants/floatingShapeColor'
import { FloatingShapeAnimation } from '../../components/floatingShape/constants/floatingShapeAnimation'
import './Footer.css'
import {ENCODED_EMAIL_ADDRESS, ENCODED_PHONE_NUMBER} from "../../constants/contact.ts";

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <FloatingShape
        size={FloatingShapeSize.Xxs}
        color={FloatingShapeColor.Secondary}
        position={{ top: '10%', left: '2%' }}
        animation={FloatingShapeAnimation.FloatReverse}
        duration={6}
        delay={2}
      />
      <FloatingShape
        size={FloatingShapeSize.Sm}
        color={FloatingShapeColor.Accent}
        position={{ top: '50%', right: '0' }}
        animation={FloatingShapeAnimation.Pulse}
        duration={4}
        delay={0.5}
      />
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-brand-text accent-text">{footerText.brand.name}</h3>
              <p className="footer-description">
                {footerText.brand.description}
              </p>
            </div>

            <div className="footer-sections">
              <div className="footer-section">
                <h4 className="footer-section-title">{footerText.sections.quickLinks.title}</h4>
                <ul className="footer-links">
                  <li><a href={`#${Sections.Hero}`} className="footer-link">{footerText.sections.quickLinks.links.home}</a></li>
                  <li><a href={`#${Sections.About}`} className="footer-link">{footerText.sections.quickLinks.links.about}</a></li>
                  <li><a href={`#${Sections.Services}`} className="footer-link">{footerText.sections.quickLinks.links.services}</a></li>
                  <li><a href={`#${Sections.Contact}`} className="footer-link">{footerText.sections.quickLinks.links.contact}</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-section-title">{footerText.sections.contactInfo.title}</h4>
                <div className="footer-contact">
                  <p className="footer-contact-item">
                    <span className="contact-label">{footerText.sections.contactInfo.email_label}</span>
                    <a data-encoded-email={ENCODED_EMAIL_ADDRESS} className="footer-link">{footerText.loading}</a>
                  </p>
                  <p className="footer-contact-item">
                    <span className="contact-label">{footerText.sections.contactInfo.phone_label}</span>
                    <a data-encoded-phone={ENCODED_PHONE_NUMBER} className="footer-link">{footerText.loading}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p className="text-small">© {currentYear} {footerText.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
