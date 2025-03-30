import React, {useState, useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import './style.css'
import data from './data.js'


const options = {
    stopOnInteraction : false,
    align: 'center',
    
}
export function EmblaCarousel() {
//   const [emblaRef] = useEmblaCarousel({loop : true}, [Autoplay(options)])

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(options)]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);


    useEffect(() => {
        if (!emblaApi) return;
    
        const onSelect = () => {
          setSelectedIndex(emblaApi.selectedScrollSnap());
        };
    
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
    
        onSelect(); // Set initial selected index
    
        return () => emblaApi.off('select', onSelect);
      }, [emblaApi]);
    
      const scrollTo = (index) => emblaApi.scrollTo(index);
    







  return (
    <div className="embla flex flex-wrap justify-center max-w-[600px]" ref={emblaRef}>
        <div className="embla__container  cursor-pointer">
        {data.map((item) => (
                <div key={item.id}
              className="embla__slide relative m-2 lg:h-[80vh] md:h-[65vh] sm:h-[60vh] w-[90%] lg:w-[30%] ">
               <img
                  src={item.image}
                  className="z-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="font-semibold text-white lg:text-3xl sm:text-2xl md:text-2xl">{item.feature}</h1>
                  <p className="mt-2 text-xl text-gray-300 lg:text-2xl sm:text-xl md:xl mb-7">
                      {item.about}
                  </p>
              </div>
          </div>
            ))}



      </div>



      <div className="embla__dots flex justify-center mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
          ></button>
        ))}
      </div>







    </div>
  )
}

export default EmblaCarousel
