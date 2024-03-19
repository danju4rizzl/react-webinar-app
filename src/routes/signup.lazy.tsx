import { Link, createLazyFileRoute } from '@tanstack/react-router'
import useIsMobile from '@/hooks/useIsMobile'
import SignupForm from '@/components/signup-form'

export const Route = createLazyFileRoute('/signup')({
  component: SignUpComponent
})

function SignUpComponent() {
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
      <div className="dark:text-neutral-100 grid content-center p-20 md:p-14 backdrop-blur-2xl ">
        <div className="grid space-y-8 md:justify-center">
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
              Start using <span className="text-teal-300">drawh.ai</span> today!
            </h1>
            <p className="scroll-m-20 text-md">
              Signup to start creating magic.
            </p>
          </div>

          <SignupForm />
        </div>

        <div className="flex space-x-3">
          <p>I have an account?</p>
          <Link to="/login" className="text-teal-300">
            Login
          </Link>
        </div>
      </div>

      {/* left side  */}
      <div
        className="p-24 rounded-l-3xl hidden md:block animate-move-bg max-w-full h-screen overflow-hidden bg-cover shadow-inner"
        style={styles}
      ></div>
    </div>
  )
}
