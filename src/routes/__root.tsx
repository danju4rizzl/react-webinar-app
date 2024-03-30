import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <div className="dark:bg-neutral-900">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
