import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '@/components/header'
import { Toaster } from '@/components/ui/toaster'

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <main className="dark:bg-neutral-900">
      <Header />
      <Outlet />
      <Toaster />
    </main>
  )
}
