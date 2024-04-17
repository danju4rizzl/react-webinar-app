import { Link, createFileRoute } from '@tanstack/react-router'
import FancyText from '@/components/ui/fancy-text'
import { ImageSlider } from '@/components/image-slider'
import FancyButton from '@/components/ui/fancy-button'

import { SLIDER_DATA } from '@/lib/constance'
import Faq from '@/components/faq'
import Footer from '@/components/footer'

import { useAuth } from '@/auth'

export const Route = createFileRoute('/')({
  component: HomeComponent
})

function HomeComponent() {
  const sliders = SLIDER_DATA
  const auth = useAuth()

  return (
    <section>
      {/* hero section */}
      <div
        className="p-32 grid justify-center bg-cover bg-no-repeat "
        style={{
          backgroundImage: `linear-gradient(to top, rgba(23, 23, 23, 1), rgba(23, 23, 23, 0.2),rgba(23, 23, 23, 1)), url('/bg-image.jpeg')`
        }}
      >
        <div className="text-white text-center gap-5 my-48 flex flex-col justify-center items-center ">
          <h3 className="max-w-3xl  text-6xl font-medium leading-tight">
            <FancyText title="Unleash" /> your Imagination with the power of{' '}
            <FancyText title="Drawh Ai" />
          </h3>
          <p className="max-w-xl text-lg">
            Drawh Ai is a powerful AI tool that allows you to create stunning
            images with a click of a button. Drawh let you create beautiful
            illustrations, design eye-catching logos, using powerful LLM models.
          </p>

          <div className="">
            <Link to={auth.isAuthenticated ? '/app' : '/signup'}>
              <FancyButton
                title={`${auth.isAuthenticated ? 'Continue' : 'Start'} using Drawh AI now `}
              />
            </Link>
            <p className="my-1 text-sm">No credit card needed</p>
          </div>
        </div>
      </div>
      <div className="-my-44 pb-44">
        {/* slider section */}
        <div className="grid gap-y-14 justify-center">
          <h2 className="text-4xl font-bold text-center dark:text-neutral-100">
            Created by <FancyText title="Drawh Ai" />
          </h2>
          <ImageSlider sliderData={sliders} />
        </div>

        {/* faq section  */}
        <div className="dark:text-neutral-100  mt-24 mb-5 grid justify-center gap-y-8  mx-auto">
          <h4 className="text-4xl font-bold text-center capitalize">
            Frequently asked questions
          </h4>
          <Faq />
        </div>
      </div>
      <Footer />
    </section>
  )
}
