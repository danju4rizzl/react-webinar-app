import { useAuth } from '@/auth'
import Greetings from '@/components/greetings'
import FancyButton from '@/components/ui/fancy-button'
import { Input } from '@/components/ui/input'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  /*
    This will protect the "/app" route from unauthenticated users 
    using the tanstack-routers context
  */
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href }
      })
    }
  },
  component: AppComponent
})

function AppComponent() {
  return (
    <section className="min-h-screen">
      <div className="text-white p-32 flex flex-col items-center gap-14 ">
        <Greetings />
        {/* Prompt input */}
        <div className=" flex w-1/2 justify-center py-3 pl-2 pr-5  dark:bg-neutral-900 border border-neutral-400 rounded-xl ">
          <Input
            placeholder="What would you like to drawh?"
            className=" text-lg border-none placeholder:text-neutral-400 max-h-60"
          />
          <FancyButton title="Generate" className="w-1/4 font-bold" />
        </div>
      </div>
    </section>
  )
}
