import { Link, createLazyFileRoute } from '@tanstack/react-router'
import useIsMobile from '@/hooks/useIsMobile'
import SignupForm from '@/components/signup-form'
import FancyText from '@/components/ui/fancy-text'
import ThirdPartyLogins from '@/components/third-party-logins'

import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { Separator } from '@/components/ui/separator'

export const Route = createLazyFileRoute('/signup')({
  component: SignUpComponent
})

function SignUpComponent() {
  /*using the useFirebaseAuth hook to check if the user is logged in. If they are, they will be redirected to the dashboard.

  const user = useFirebaseAuth()
  console.log('🟡 User is:', user)
  */

  const isMobile = useIsMobile()

  const styles = {
    backgroundImage: `linear-gradient(to bottom right, rgba(25, 25, 25, 1), rgba(25, 25, 25, 0.2),rgba(25, 25, 25, 1)), url(/signup-screen-bg-image.png)`
  }

  return (
    <div
      className=" dark:bg-neutral-900  max-w-full h-screen overflow-hidden grid md:grid-flow-col  animate-move-up-down bg-cover"
      style={isMobile ? styles : {}}
    >
      {/* left side  */}
      <div className="dark:text-neutral-100 grid content-between p-20 py-52 md:py-40 md:px-48 backdrop-blur-2xl ">
        <div className="grid space-y-8 md:justify-center">
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
              Start using <FancyText title="Drawh Ai" /> today!
            </h1>
            <p className="scroll-m-20 text-md">
              Signup to start creating magic.
            </p>
          </div>
          <SignupForm />

          {/* A separator    */}
          <div className="flex justify-center items-center">
            <Separator className="w-1/4" />
            <small className="text-neutral-500 mx-5">or continue with</small>
            <Separator className="w-1/4" />
          </div>

          <ThirdPartyLogins />
          <div className="flex justify-center space-x-2">
            <p>I have an account?</p>
            <Link to="/login" className="text-teal-300">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* right side  */}
      <div
        className="p-24 rounded-l-3xl hidden md:block max-w-full h-screen overflow-hidden  animate-move-up-down bg-cover"
        style={styles}
      ></div>
    </div>
  )
}
