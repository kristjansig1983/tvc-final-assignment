import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Footer from '../components/footer'

function Home() {
  return (
    <HomePage>
      <Header />

      <Carousel infiniteLoop autoPlay showThumbs={false} showArrows={false}>
        {[
          <Slider>
            <SliderImg
              src={
                'https://i2.wp.com/secretsolstice.is/wp-content/uploads/2019/02/vintage-caravan-main-1.jpg?fit=1200%2C750&ssl=1'
              }
            ></SliderImg>
          </Slider>,
          <Slider>
            <SliderImg
              src={'https://photos.bandsintown.com/large/11228607.jpeg'}
            ></SliderImg>
          </Slider>,
          <Slider>
            <SliderImg
              src={
                'https://i0.wp.com/atthebarrier.com/wp-content/uploads/2022/10/vintage-caravan-manchester-academy-3-30.10.22-1.jpg?resize=1024%2C727&ssl=1'
              }
            ></SliderImg>
          </Slider>,
          <Slider>
            <SliderImg
              src={
                'https://www.perun.hr/layout/i/galleries/opeth-vintage-caravan-zagreb-tvornica-kulture-26092022-galerija/VintageCaravan-260922-fotoSanjaMatic-11.jpg'
              }
            ></SliderImg>
          </Slider>,
        ]}
      </Carousel>
      <Footer />
    </HomePage>
  )
}

const HomePage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const Slider = styled.div`
  height: 100%;
  width: 100%;
`

const SliderImg = styled.img`
  height: 100vh;
  width: 100vw;
`

export default Home
