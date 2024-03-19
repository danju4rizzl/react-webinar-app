import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent
})

function HomeComponent() {
  return (
    <div className="">
      <div className="p-32">
        <h1 className="text-white">Welcome to draw</h1>
      </div>
    </div>
  )
}
