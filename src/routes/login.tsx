import LoginForm from '@/components/login-form'
import ThirdPartyLogins from '@/components/third-party-logins'
import FancyText from '@/components/ui/fancy-text'
import { Separator } from '@/components/ui/separator'
import useIsMobile from '@/hooks/useIsMobile'
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login')({
  component: LoginComponent
})

function LoginComponent() {
  const isMobile = useIsMobile()

  const styles = {
    backgroundImage: `linear-gradient(to top left, rgba(25, 25, 25, 1), rgba(25, 25, 25, 0.2),rgba(25, 25, 25, 1)), url(/login-screen-bg-image.png)`
  }

  return (
    <div
      className="max-w-full h-screen overflow-hidden grid md:grid-flow-col animate-move-up-down"
      style={isMobile ? styles : {}}
    >
      {/* left side  */}
      <div
        className="p-24 rounded-r-3xl hidden md:block max-w-full h-screen overflow-hidden animate-move-up-down"
        style={styles}
      ></div>

      {/* right side  */}
      <div className="dark:text-neutral-100 grid content-between px-20 py-52 md:py-48 md:px-36 backdrop-blur-2xl">
        <div className="grid space-y-8 md:justify-center">
          <div className="space-y-4">
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
              Continue using <FancyText title="Drawh Ai" /> now!
            </h1>
            <p className="scroll-m-20 text-md">
              Log back in to keep creating magic.
            </p>
          </div>
          <ThirdPartyLogins />

          {/* A separator    */}
          <div className="flex justify-center items-center">
            <Separator className="w-1/4" />
            <small className="text-neutral-500 mx-5">or login with email</small>
            <Separator className="w-1/4" />
          </div>

          <LoginForm />

          <div className="flex justify-center space-x-1">
            <p>Don’t have an account?</p>
            <Link
              search={{ redirect: '/' }}
              to="/signup"
              className="text-teal-300"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
