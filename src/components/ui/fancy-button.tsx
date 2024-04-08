import { Button } from './button'

interface FancyButtonProps {
  title: string
  className?: string
  isSubmit?: boolean
  isDisable?: boolean
}

const FancyButton = ({
  title,
  className,
  isSubmit,
  isDisable = false
}: FancyButtonProps) => {
  return (
    <Button
      type={isSubmit ? 'submit' : 'button'}
      className={`
    bg-gradient-to-r from-blue-500 to-purple-500
    hover:to-blue-900 hover:from-purple-900 text-neutral-100
    transition-shadow rounded shadow-md hover:animate-pulse ${className}
 `}
      disabled={isDisable}
    >
      {title}
    </Button>
  )
}

export default FancyButton
