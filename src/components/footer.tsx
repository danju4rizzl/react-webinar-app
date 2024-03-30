import BrandLogo from './ui/brand-logo'
import FancyText from './ui/fancy-text'
import { Separator } from './ui/separator'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="dark:text-neutral-100 pt-24 pb-3  px-32">
      <Separator />
      <div className="flex flex-col items-center gap-y-10  justify-center my-10">
        <BrandLogo className="max-w-16" />
        <p className="md:px-96 text-center text-lg">
          Draw any artwork with endless possibilities using our powerful AI
          technology with only a few clicks on. Become a part of our community
          of thousands of users who use Drawh Ai to create stunning artworks.
        </p>
        <h3 className="text-lg font-bold capitalize">Find us on </h3>
        <div className="flex gap-x-5 text-2xl">
          <a href="https://fb.com/realdeejaydev" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://x.com/real_deejay_dev" target="_blank">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com/real_deejay_dev" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@deejaydev" target="_blank">
            <FaYoutube />
          </a>
        </div>
        <p className="text-sm">
          ©2024 <FancyText title=" Drawh Ai" className="font-bold" />{' '}
          Technologies Limited.
        </p>
      </div>
    </div>
  )
}

export default Footer
