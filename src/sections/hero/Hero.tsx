import {Sections} from '../../constants/sections'
import heroText from './translation.json'
import FloatingShape from '../../components/floatingShape/FloatingShape'
import {FloatingShapeSize} from '../../components/floatingShape/constants/floatingShapeSize'
import {FloatingShapeColor} from '../../components/floatingShape/constants/floatingShapeColor'
import {FloatingShapeAnimation} from '../../components/floatingShape/constants/floatingShapeAnimation'
import './Hero.css'
import {getPublicImagesUrl} from "../../utils/getPublicImagesUrl.ts";

const Hero = () => {
    return (
        <section id={Sections.Hero} className="hero-section">
            <FloatingShape
                size={FloatingShapeSize.Xxlg}
                color={FloatingShapeColor.Secondary}
                position={{top: '10%', right: '-100px'}}
                animation={FloatingShapeAnimation.Float}
                duration={6}
            />
            <FloatingShape
                size={FloatingShapeSize.Md}
                color={FloatingShapeColor.Accent}
                position={{bottom: '15%', left: '-80px'}}
                animation={FloatingShapeAnimation.FloatReverse}
                duration={4}
            />
            <div className="hero-grid">
                <div className="hero-content">
                    <h1 className="hero-title">{heroText.title}</h1>
                    <p className="hero-subtitle text-large">
                        {heroText.subtitle}
                    </p>
                    <div className="hero-actions">
                        <a href={`#${Sections.Contact}`} className="btn btn-primary btn-lg">
                            {heroText.buttons.secondary}
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-image-grid">
                        <img
                            src={getPublicImagesUrl('hero-child-1.jpg')}
                            loading="lazy"
                            alt="terapia 1"
                            className="hero-image"
                        />
                        <img
                            src={getPublicImagesUrl('hero-child-2.jpg')}
                            loading="lazy"
                            alt="terapia 2"
                            className="hero-image"
                        />
                        <img
                            src={getPublicImagesUrl('hero-child-3.jpg')}
                            loading="lazy"
                            alt="terapia 3"
                            className="hero-image"
                        />
                        <img
                            src={getPublicImagesUrl('hero-child-4.jpg')}
                            loading="lazy"
                            alt="terapia 4"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
