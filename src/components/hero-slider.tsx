import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'
import ImageCard from './image-card'

import { SLIDER_DATA } from '@/lib/constance'

export function HeroSlider() {
  return (
    <Carousel
      className="w-full max-w-screen-xl"
      opts={{
        loop: true,
        duration: 70
      }}
      plugins={[Autoplay()]}
    >
      <CarouselContent>
        {SLIDER_DATA.map((data, idx) => (
          <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 ">
            <ImageCard imageData={data} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-neutral-300 hover:text-neutral-600" />
      <CarouselNext className="text-neutral-300 hover:text-neutral-600" />
    </Carousel>
  )
}
