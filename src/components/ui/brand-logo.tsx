import { Link } from '@tanstack/react-router'

interface BrandLogoProps {
  className: string
}

const BrandLogo = ({ className }: BrandLogoProps) => {
  return (
    <Link to="/">
      <img
        src="/public/logo.png"
        alt="Logo"
        className={`max-w-20 ${className}`}
      />
    </Link>
  )
}

export default BrandLogo
