import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import FancyText from './ui/fancy-text'

interface ImageCardProps {
  imageData: {
    title: string
    description: string
    src: string
  }
}

const ImageCard = ({ imageData }: ImageCardProps) => {
  return (
    <Card className="rounded-2xl dark:bg-neutral-800  bg-opacity-25 backdrop-filter backdrop-blur-lg backdrop-saturate-150">
      <CardHeader>
        <img
          src={imageData.src}
          alt={imageData.title}
          className="rounded-2xl"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className=" py-5 truncate">
          <FancyText title={imageData.title} className="" />
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {imageData.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default ImageCard
