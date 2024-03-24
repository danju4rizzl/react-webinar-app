import { HeroSlider } from '@/components/slider'
import FancyText from '@/components/ui/fancy-text'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent
})

function HomeComponent() {
  return (
    <div className="h-screen">
      <div className="p-32">
        <FancyText title="Welcome to draw" className="text-8xl" />
        <HeroSlider />
      </div>
    </div>
  )
}
