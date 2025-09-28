import { FloatingShapeSize } from './constants/floatingShapeSize'
import { FloatingShapeColor } from './constants/floatingShapeColor'
import { FloatingShapeAnimation } from './constants/floatingShapeAnimation'
import './FloatingShape.css'

interface FloatingShapeProps {
  size?: FloatingShapeSize
  color?: FloatingShapeColor
  position?: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  animation?: FloatingShapeAnimation
  duration?: number
  delay?: number
  content?: string
}

const FloatingShape = ({
  size = FloatingShapeSize.Md,
  color = FloatingShapeColor.Secondary,
  position = {},
  animation = FloatingShapeAnimation.Float,
  duration = 4,
  delay = 0,
  content
}: FloatingShapeProps) => {
  const style = {
    ...position,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  }

  return (
    <div 
      className={`floating-shape floating-shape--${size} floating-shape--${color} floating-shape--${animation}`}
      style={style}
    >
      {content && <span>{content}</span>}
    </div>
  )
}

export default FloatingShape
