import FancyButton from '@/components/ui/fancy-button'
import { Input } from '@/components/ui/input'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app')({
  component: AppComponent
})

function AppComponent() {
  return (
    <div className="text-white p-32 flex flex-col items-center gap-14 ">
      <h1 className="text-5xl">Happy late night, DeejayDev</h1>
      {/* Prompt input */}
      <div className=" flex w-1/2 justify-center py-3 pl-2 pr-5  dark:bg-neutral-800 border border-neutral-400 rounded-xl ">
        <Input
          placeholder="What would you like to drawh?"
          className="border-0 text-lg placeholder:text-neutral-400 max-h-60"
        />
        <FancyButton title="Generate" className="w-1/4 font-bold" />
      </div>
    </div>
  )
}
