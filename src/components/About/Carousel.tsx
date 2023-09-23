import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/css'
import { Box, Image } from '@chakra-ui/react'
import { useEffect } from 'react'

const sliderOptions = {
  type: 'loop',
  gap: '10px',
  drag: 'free',
  arrows: false,
  pagination: false,
  perPage: 3,
  autoScroll: {
    pauseOnHover: false,
    pauseOnFocus: false,
    rewind: false,
    speed: 1,
  },
}

const Carousel = () => {
  return (
    <Box>
      <Splide
        aria-label="思い出"
        options={sliderOptions}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <img className="slide-img" src="img/sample1.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="img/sample2.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="img/sample3.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="img/sample4.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="img/sample5.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="img/sample6.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="img/sample7.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="img/sample8.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="img/sample9.jpg" />
        </SplideSlide>
      </Splide>

      <style jsx>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </Box>
  )
}

export default Carousel
