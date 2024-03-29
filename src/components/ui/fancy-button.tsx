import { Button } from './button'

interface FancyButtonProps {
  title: string
  className?: string
  isSubmit?: boolean
}

const FancyButton = ({ title, className, isSubmit }: FancyButtonProps) => {
  return (
    <Button
      type={isSubmit ? 'submit' : 'button'}
      className={`
 bg-gradient-to-r from-blue-500 to-purple-500  rounded text-neutral-100 
    hover:from-purple-500 hover:to-blue-500  
    transition-all duration-300 ${className}
  `}
    >
      {title}
    </Button>
  )
}

export default FancyButton
