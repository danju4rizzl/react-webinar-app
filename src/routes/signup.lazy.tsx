import { Link, createLazyFileRoute } from '@tanstack/react-router'
import useIsMobile from '@/hooks/useIsMobile'
import SignupForm from '@/components/signup-form'
import FancyText from '@/components/ui/fancy-text'
import { Button } from '@/components/ui/button'
import { loginWithGoogle } from '@/lib/firebase'

import GoogleIcon from '@/assets/google.svg'
import AppleIcon from '@/assets/apple.svg'
import { toast } from '@/components/ui/use-toast'
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'

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
    backgroundImage: 'url(/login-screen-bg-image.png)'
  }

  return (
    <div
      className=" dark:bg-neutral-900  max-w-full h-screen overflow-hidden  grid md:grid-flow-col bg-cover  "
      style={isMobile ? styles : {}}
    >
      {/* right side  */}
      <div className="dark:text-neutral-100 grid content-between p-20 py-52 md:py-40 md:px-48 backdrop-blur-2xl  ">
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

          <div className="flex justify-center items-center">
            <hr className="flex-1 border-neutral-600" />
            <small className="text-neutral-500 mx-5">or continue with</small>
            <hr className="flex-1 border-neutral-600" />
          </div>

          <div className="flex justify-center items-center space-x-4">
            <Button onClick={() => loginWithGoogle()}>
              <img
                src={GoogleIcon}
                alt="Log in with Google"
                className="w-6 h-6 mr-2"
              />
              Google Account
            </Button>
            <Button
              onClick={() =>
                toast({
                  title: 'Coming soon',
                  description: `We currently do not support Apple signings, but we're working one it`,
                  duration: 5000
                })
              }
            >
              <img
                src={AppleIcon}
                alt="Log in with Apple"
                className="w-6 h-6  mr-2"
              />
              Apple Account
            </Button>
          </div>

          <div className="flex justify-center space-x-1">
            <p>I have an account?</p>
            <Link to="/login" className="text-teal-300">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* right side  */}
      <div
        className="p-24 rounded-l-3xl hidden md:block animate-move-bg max-w-full h-screen overflow-hidden bg-cover shadow-inner"
        style={styles}
      ></div>
    </div>
  )
}
