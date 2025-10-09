import {Sections} from '../../constants/sections'
import aboutText from './translation.json'
import './About.css'
import {getPublicImagesUrl} from "../../utils/getPublicImagesUrl.ts";

const About = () => {
    return (
        <section id={Sections.About} className="about-section section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual">
                        <img
                            src={getPublicImagesUrl('about-photo.png')}
                            loading="lazy"
                            alt="Specjalista pracujący z dzieckiem"
                            className="about-image"
                        />
                    </div>
                    <div className="about-content">
                        <div className="section-header">
                            <h2 className="section-title">{aboutText.title}</h2>
                            <p className="section-subtitle text-large">{aboutText.subtitle}</p>
                        </div>
                        <div className="about-text">
                            <p>{aboutText.content.paragraph1}</p>
                            <p>{aboutText.content.paragraph2}</p>
                            <p>{aboutText.content.paragraph3}</p>
                        </div>
                        <div className="about-features">
                            {aboutText.features.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
