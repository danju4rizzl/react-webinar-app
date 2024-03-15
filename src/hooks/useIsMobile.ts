import { useState, useEffect } from 'react'

// Custom hook to determine if the current screen size is mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Assuming 768px is the breakpoint for mobile screens
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Call the function initially to set the state

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}

export default useIsMobile
