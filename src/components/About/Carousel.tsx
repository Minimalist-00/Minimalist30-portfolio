import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/css'

const Carousel = () => {
  const slideImages = [
    'img/sample1.jpg',
    'img/sample2.jpg',
    'img/sample3.jpg',
    'img/sample4.jpg',
    'img/sample5.jpg',
    'img/sample6.jpg',
    'img/sample7.jpg',
    'img/sample8.jpg',
    'img/sample9.jpg',
  ]

  const sliderOptions = {
    type: 'loop',
    gap: '20px',
    drag: 'free',
    arrows: false,
    pagination: false,
    perPage: 4,
    autoScroll: {
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: false,
      speed: 1,
    },
  }

  return (
    <div>
      <Splide
        aria-label="Carousel"
        options={sliderOptions}
        extensions={{ AutoScroll }}
      >
        {slideImages.map((imageSrc, index) => (
          <SplideSlide key={index}>
            <img
              alt="画像"
              src={imageSrc}
              style={{
                display: 'block',
                width: '100%',
                height: '70%',
                objectFit: 'cover',
                paddingRight: '10px',
                paddingLeft: '10px',
                paddingBottom: '10px',
                paddingTop: '10px',
              }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Carousel
