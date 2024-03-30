import { Link } from '@tanstack/react-router'

const Header = () => {
  return (
    <header className="px-16 md:px-32 py-5 z-10 flex items-center justify-between min-w-full gap-2 fixed text-white">
      <Link to="/" className="[&.active]:font-bold flex items-center">
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
  )
}

export default Header
