import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent() {
  return (
    <main className="dark:bg-neutral-900">
      <header className="px-32 py-5  z-10 flex items-center justify-between min-w-full gap-2 fixed bg-white bg-opacity-25 backdrop-blur-sm shadow-lg text-white">
        <Link to="/" className="[&.active]:font-bold">
          <img src="/public/logo.png" alt="Logo" className="max-w-20" />
        </Link>{' '}
        <div className="flex gap-2">
          <Link to="/signup" className="[&.active]:font-bold">
            Sign up
          </Link>
          <Link to="/login" className="[&.active]:font-bold">
            login
          </Link>
        </div>
      </header>
      <Outlet />
    </main>
  )
}
