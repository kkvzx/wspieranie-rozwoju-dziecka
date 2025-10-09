import {Sections} from '../../constants/sections'
import servicesText from './translation.json'
import FloatingShape from '../../components/floatingShape/FloatingShape'
import {FloatingShapeSize} from '../../components/floatingShape/constants/floatingShapeSize'
import {FloatingShapeColor} from '../../components/floatingShape/constants/floatingShapeColor'
import {FloatingShapeAnimation} from '../../components/floatingShape/constants/floatingShapeAnimation'
import './Services.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faQuestion, faVolleyballBall, faHandScissors, faEye, faUsers} from "@fortawesome/free-solid-svg-icons";
import type {IconProp, } from "@fortawesome/fontawesome-svg-core";


interface Service {
    key: string,
    data: {
        title: string,
        description: string,
    },
    icon: IconProp
}

const Services = () => {
    const services: Service[] = [
        {
            key: 'schoolSkills',
            data: servicesText.schoolSkills,
            icon: faBook,
        },
        {
            key: 'supportDifficulties',
            data: servicesText.supportDifficulties,
            icon: faQuestion
        },
        {
            key: 'handTherapy',
            data: servicesText.handTherapy,
            icon: faHandScissors
        },
        {
            key: 'visionTherapy',
            data: servicesText.visionTherapy,
            icon: faEye
        },
        {
            key: 'cognitiveSkills',
            data: servicesText.cognitiveSkills,
            icon: faVolleyballBall
        },
        {
            key: 'groupActivities',
            data: servicesText.groupActivities,
            icon: faUsers
        }
    ] as const

    return (
        <section id={Sections.Services} className="services-section section">
            <FloatingShape
                size={FloatingShapeSize.Md}
                color={FloatingShapeColor.Accent}
                position={{top: '0', right: '-80px'}}
                animation={FloatingShapeAnimation.Float}
                duration={7}
                delay={1.5}
            />
            <FloatingShape
                size={FloatingShapeSize.Xs}
                color={FloatingShapeColor.Secondary}
                position={{bottom: '25%', left: '3%'}}
                animation={FloatingShapeAnimation.Pulse}
                duration={12}
                delay={3}
            />
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{servicesText.title}</h2>
                    <p className="section-subtitle text-large">
                        {servicesText.subtitle}
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.key} className="service-card">
                            <FontAwesomeIcon icon={service.icon} className="service-icon"/>
                            <h3 className="service-title">{service.data.title}</h3>
                            <p className="service-description">{service.data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
