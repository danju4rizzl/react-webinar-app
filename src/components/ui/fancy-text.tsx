function FancyText({ title }: { title: string }) {
  return (
    <span className="bg-gradient-to-r from-teal-300 to-rose-500 text-transparent bg-clip-text">
      {title}
    </span>
  )
}

export default FancyText
