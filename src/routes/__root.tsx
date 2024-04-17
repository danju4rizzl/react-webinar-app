import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/header'

import { type AuthContext } from '@/auth'
import NotFound from '@/components/not-found'

interface RootRouterContext {
  auth: AuthContext
}

export const Route = createRootRouteWithContext<RootRouterContext>()({
  component: RootComponent,
  notFoundComponent: () => <NotFound />
})

function RootComponent() {
  return (
    <main className="dark:bg-neutral-900">
      <Header />
      <Outlet />
      <Toaster />
      <TanStackRouterDevtools position="bottom-left" initialIsOpen={false} />
    </main>
  )
}
