import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '@/components/header'

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <div className="dark:bg-neutral-900">
      <Header />
      <Outlet />
    </div>
  )
}
