import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin } from 'lucide-react';

interface PropertyCarouselProps {
  images: string[];
  title: string;
  location: string;
  status: string;
}

const PropertyCarousel = ({ images, title, location, status }: PropertyCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true 
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up event listeners when embla is ready
  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on('select', onSelect);
    
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="space-y-4">
      {/* Main Carousel */}
      <div className="relative">
        <div className="overflow-hidden rounded-lg" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 h-96 relative"
              >
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img 
                  src={image} 
                  alt={`${title} - Foto ${index + 1}`} 
                  className="w-full h-full object-cover" 
                />
                {index === 0 && (
                  <>
                    <div className="absolute top-6 left-6 z-20">
                      <Badge className="bg-amber-500 text-white mb-2">{status}</Badge>
                      <h1 className="text-white text-3xl font-bold">{title}</h1>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white z-20">
                      <div className="flex items-center text-lg">
                        <MapPin className="h-5 w-5 mr-2" />
                        {location}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Grid */}
      {/* <div className="grid grid-cols-4 gap-4">
        {images.slice(1, 5).map((image, index) => (
          <button
            key={index + 1}
            className={`h-24 rounded-lg overflow-hidden transition-all ${
              selectedIndex === index + 1 
                ? 'ring-2 ring-primary' 
                : 'hover:opacity-80'
            }`}
            onClick={() => emblaApi?.scrollTo(index + 1)}
          >
            <img 
              src={image} 
              alt={`${title} - Miniatura ${index + 2}`} 
              className="w-full h-full object-cover" 
            />
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default PropertyCarousel;