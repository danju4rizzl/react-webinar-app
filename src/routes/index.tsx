import FancyText from '@/components/ui/fancy-text'
import { createFileRoute } from '@tanstack/react-router'
import { HeroSlider } from '@/components/hero-slider'
import { Button } from '@/components/ui/button'
import FancyButton from '@/components/ui/fancy-button'

export const Route = createFileRoute('/')({
  component: HomeComponent
})

function HomeComponent() {
  return (
    <div className="">
      <div
        className="p-32 grid justify-center bg-cover bg-no-repeat "
        style={{
          backgroundImage: `linear-gradient(to top, rgba(23, 23, 23, 1), rgba(23, 23, 23, 0.5)), url('/public/bg-image.jpeg')`
        }}
      >
        <div className="text-white text-center gap-5 my-48 flex flex-col justify-center items-center ">
          <h3 className="max-w-3xl  text-6xl font-medium leading-tight">
            <FancyText title="Unleash" /> your Imagination with the power of{' '}
            <FancyText title="Drawh Ai" />
          </h3>
          <p className="max-w-xl text-lg">
            Drawh Ai is a powerful AI tool that allows you to create stunning
            images with a click of a button. Drawh let you create beautiful
            illustrations, design eye-catching logos, using powerful LLM models.
          </p>

          <div className="">
            <FancyButton title="Start using  my imagining" />
            <p className="my-1">No credit card needed</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-14">
        <HeroSlider />
      </div>
    </div>
  )
}
