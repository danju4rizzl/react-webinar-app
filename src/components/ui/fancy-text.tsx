interface FancyTextProps {
  title: string
  className?: string
}

const FancyText = ({ title, className }: FancyTextProps) => {
  return (
    <span
      className={`bg-gradient-to-r from-teal-400 to-rose-400 text-transparent bg-clip-text ${className}`}
    >
      {title}
    </span>
  )
}

export default FancyText
