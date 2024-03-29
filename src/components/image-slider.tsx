import { ImageSliderData } from '@/lib/types'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import FancyText from './ui/fancy-text'

interface ImageSliderProps {
  sliderData: ImageSliderData
}

export function ImageSlider({ sliderData }: ImageSliderProps) {
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
        {sliderData.map(({ title, description, src }, idx) => (
          <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 ">
            <Card className="rounded-2xl dark:bg-neutral-800  bg-opacity-25 backdrop-filter backdrop-blur-lg backdrop-saturate-150">
              <CardHeader>
                <img src={src} alt={title} className="rounded-2xl" />
              </CardHeader>
              <CardContent>
                <CardTitle className=" py-5 truncate">
                  <FancyText title={title} />
                </CardTitle>
                <CardDescription className="line-clamp-2 dark:text-neutral-100">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-neutral-300 hover:text-neutral-600" />
      <CarouselNext className="text-neutral-300 hover:text-neutral-600" />
    </Carousel>
  )
}
