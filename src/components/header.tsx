import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import FancyButton from './ui/fancy-button'
import BrandLogo from './ui/brand-logo'

const Header = () => {
  const [bgColor, setBgColor] = useState('bg-transparent')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('backdrop-blur-md bg-opacity-50') // Change to the desired color when scrolled down
      } else {
        setBgColor('bg-transparent') // Reset to the original color
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`px-16 md:px-32 py-5 z-10 flex items-center justify-between min-w-full gap-2 fixed text-white capitalize ${bgColor} `}
    >
      <Link to="/" className="[&.active]:font-bold flex items-center">
        <BrandLogo className="max-w-16" />
      </Link>{' '}
      <div className="flex items-center  gap-x-5">
        <Link to="/login" className="[&.active]:font-bold">
          login
        </Link>
        <Link to="/signup">
          <FancyButton title="Create an Account" />
        </Link>
      </div>
    </header>
  )
}

export default Header
