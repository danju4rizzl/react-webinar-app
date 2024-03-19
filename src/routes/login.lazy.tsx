import LoginForm from '@/components/login-form'
import FancyText from '@/components/ui/fancy-text'
import useIsMobile from '@/hooks/useIsMobile'
import { Link, createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/login')({
  component: LoginComponent
})

function LoginComponent() {
  const isMobile = useIsMobile()

  const styles = {
    backgroundImage: 'url(/signup-screen-bg-image.png)'
  }

  return (
    <div
      className="  max-w-full min-h-screen overflow-hidden grid md:grid-flow-col bg-cover bg-no-repeat "
      style={isMobile ? styles : {}}
    >
      {/* left side  */}
      <div
        className="p-24 rounded-r-3xl hidden md:block animate-move-bg max-w-full h-screen overflow-hidden bg-cover shadow-inner"
        style={styles}
      ></div>

      {/* right side  */}
      <div className="dark:text-neutral-100 grid content-center p-20 md:p-14 backdrop-blur-2xl ">
        <div className="grid space-y-8 md:justify-center">
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
              Continue using <FancyText title="drwah.ai" /> now!
            </h1>
            <p className="scroll-m-20 text-md">
              Log back in to keep creating magic.
            </p>
          </div>

          <LoginForm />
        </div>

        <div className="flex space-x-3">
          <p>Don’t have an account?</p>
          <Link to="/signup" className="text-teal-300">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  )
}
