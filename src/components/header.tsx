import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import FancyButton from './ui/fancy-button'
import BrandLogo from './ui/brand-logo'
import useChangeBgOnScroll from '@/hooks/useChangeBgOnScroll'
import { getUser, logoutUser } from '@/lib/firebase'
import { User } from 'firebase/auth'
import { Button } from './ui/button'

const Header = () => {
  const bgColor = useChangeBgOnScroll()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    getUser().then((userData) => {
      setUser(userData)
    })
  }, [])

  return (
    <header
      className={`px-16 md:px-32 py-5 z-10 flex items-center justify-between min-w-full gap-2 fixed text-white capitalize ${bgColor} `}
    >
      <BrandLogo className="max-w-16" />

      <div className="flex items-center  gap-x-5">
        {!user ? (
          <>
            <Link to="/login" className="[&.active]:font-bold">
              login
            </Link>
            <Link to="/signup">
              <FancyButton title="Create an Account" />
            </Link>
          </>
        ) : (
          <Button
            type="button"
            className="[&.active]:font-bold"
            onClick={() => logoutUser()}
          >
            Logout
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header
