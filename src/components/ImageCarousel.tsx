import { useState } from 'react'

interface ImageCarouselProps {
  images: string[]
  projectName: string
}

function ImageCarousel({ images, projectName }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ))
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="my-4">
      <div className="relative flex items-center justify-center min-h-[400px]">
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
          onClick={prevImage}
        >
          &#8249;
        </button>
        
        <div className="relative max-w-full w-full flex justify-center">
          <div className="relative">
            <img 
              src={images[currentIndex]} 
              alt={`${projectName} - Image ${currentIndex + 1}`}
              className="max-w-full max-h-[600px] w-auto h-auto object-contain rounded-lg shadow-lg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
        
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
          onClick={nextImage}
        >
          &#8250;
        </button>
      </div>
      
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
