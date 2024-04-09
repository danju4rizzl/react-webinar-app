import { useState, useEffect } from 'react'

const useChangeBgOnScroll = (
  threshold: number = 50,
  initialColor: string = 'bg-transparent'
): string => {
  const [bgColor, setBgColor] = useState<string>(initialColor)

  useEffect(() => {
    let prevScrollPos: number = window.scrollY

    const handleScroll = () => {
      const currentScrollPos: number = window.scrollY

      if (Math.abs(currentScrollPos - prevScrollPos) > threshold) {
        if (currentScrollPos > prevScrollPos) {
          setBgColor('backdrop-blur-md bg-opacity-50')
        } else {
          setBgColor(initialColor)
        }
        prevScrollPos = currentScrollPos
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold, initialColor])

  return bgColor
}

export default useChangeBgOnScroll
