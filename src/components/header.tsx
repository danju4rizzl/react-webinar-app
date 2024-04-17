import { useEffect } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'

import { getUser, logoutUser } from '@/lib/firebase'
import useChangeBgOnScroll from '@/hooks/useChangeBgOnScroll'

import FancyButton from './ui/fancy-button'
import BrandLogo from './ui/brand-logo'
import { Button } from './ui/button'
import { useAuth } from '@/auth'
import { flushSync } from 'react-dom'

const Header = () => {
  const bgColor = useChangeBgOnScroll()
  const auth = useAuth()
  const navigate = useNavigate()

  // This will run whenever the login button is clicked
  const handleLogout = () => {
    const hasLoggedOut = logoutUser()

    flushSync(() => {
      auth.setUser(hasLoggedOut)
    })

    navigate({ to: '/' })
  }

  useEffect(() => {
    /*
    When the header component mounts this useEffect
    checks once, if the user is logged in then sets the auth context
    */
    const getUserFromFirebase = async () => {
      const firebaseUser = await getUser()
      if (firebaseUser) {
        auth.setUser(firebaseUser)
      }
    }
    getUserFromFirebase()
  }, [])

  return (
    <header
      className={`px-16 md:px-32 py-5 z-10 flex items-center justify-between min-w-full gap-2 fixed text-white capitalize ${bgColor} `}
    >
      <BrandLogo className="max-w-16" />

      <div className="flex items-center  gap-x-5">
        {!auth.isAuthenticated ? (
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
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header
