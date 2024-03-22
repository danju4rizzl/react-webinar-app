function FancyText({ title }: { title: string }) {
  return (
    <span className="bg-gradient-to-r from-teal-400  to-rose-400  text-transparent bg-clip-text">
      {title}
    </span>
  )
}

export default FancyText
