import FancyButton from '@/components/ui/fancy-button'
import { Input } from '@/components/ui/input'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  //  This will protect the "/app" route from unauthenticated users
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
        <h1 className="text-5xl">Happy late night, DeejayDev</h1>
        {/* Prompt input */}
        <div className=" flex w-1/2 justify-center py-3 pl-2 pr-5  dark:bg-neutral-900 border border-neutral-400 rounded-xl ">
          <Input
            placeholder="What would you like to drawh?"
            className="focus:border-0 focus:outline-none text-lg placeholder:text-neutral-400 max-h-60 bg-red-900"
          />
          <FancyButton title="Generate" className="w-1/4 font-bold" />
        </div>
      </div>
    </section>
  )
}
