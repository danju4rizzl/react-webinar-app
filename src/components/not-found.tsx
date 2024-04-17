import { Link } from '@tanstack/react-router'
import FancyText from './ui/fancy-text'

const NotFound = () => {
  return (
    <div className="h-screen grid place-content-center gap-y-5  text-center text-2xl md:text-4xl text-neutral-100">
      <h2 className="text-4xl  md:text-8xl">4🥶4</h2>
      <p>The page you are looking for dose not exist</p>
      <Link to="/app" className="hover:underline">
        Go back to the <FancyText title="Drawh Ai" />
      </Link>
    </div>
  )
}

export default NotFound
