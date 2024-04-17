import { useAuth } from '@/auth'
import FancyText from './ui/fancy-text'

function Greetings() {
  const auth = useAuth()
  // a function returns a greeting based on the time of the day
  const greeting = () => {
    const time = new Date().getHours()
    if (time < 12) {
      return 'Good morning'
    } else if (time < 18) {
      return 'Good afternoon'
    } else {
      return 'Good evening'
    }
  }
  const greeter = greeting()

  return (
    <div>
      <h1 className="text-5xl">
        {greeter},{' '}
        <FancyText
          title={!auth.user?.displayName ? 'user' : auth.user.displayName}
          className="capitalize"
        />
      </h1>
    </div>
  )
}

export default Greetings
