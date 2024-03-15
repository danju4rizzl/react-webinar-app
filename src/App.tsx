import { ThemeProvider } from '@/components/theme-provider'
import { database, isLoggedIn } from '@/lib/firebase'
import './App.css'
import LoginForm from './components/login-form'
import useIsMobile from './hooks/useIsMobile'

function App() {
  const isMobile = useIsMobile()

  const styles = {
    backgroundImage: 'url(/login-screen-bg-image.png)'
  }

  return (
    <main>
      <div
        className=" dark:bg-neutral-900  max-w-full h-screen overflow-hidden  grid md:grid-flow-col bg-cover bg-no-repeat "
        style={isMobile ? styles : {}}
      >
        {/* right side  */}
        <div className="dark:text-neutral-100 grid content-between p-20 md:p-14 backdrop-blur-2xl ">
          <div>
            <img src="/public/logo.png" alt="Logo" className="max-w-20" />
          </div>

          <div className="grid space-y-8 md:justify-center">
            <div className="space-y-4">
              <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                Let's get <span className="text-">creative!</span>
              </h1>
              <p className="scroll-m-20 text-md">
                Log in to Drawh.ai to start creating magic.
              </p>
            </div>

            <LoginForm />
          </div>

          <div className="flex space-x-3">
            <p>Don’t have an account?</p>
            <a href="" className="text-teal-300">
              Sign Up
            </a>
          </div>
        </div>

        {/* left side  */}
        <div
          className="p-24 rounded-l-3xl hidden md:block animate-move-bg max-w-full h-screen overflow-hidden bg-cover shadow-inner"
          style={styles}
        ></div>
      </div>
    </main>
  )
}

export default App
