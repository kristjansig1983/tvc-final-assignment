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
                'https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/329593388_595452748608052_6060398424105268395_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=NV_tegXrIyQAX9OJ88e&_nc_ht=scontent-dub4-1.xx&oh=00_AfBGIiQNxmBm4_ZssYR0rCcWi2Vdi6mCu5wXI-zlkXgy8g&oe=64556CF6'
              }
            ></SliderImg>
          </Slider>,
          <Slider>
            <SliderImg
              src={
                'https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/323885126_741035844109380_1451857662897556584_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hlpY6cXFO4IAX8A3fGN&_nc_ht=scontent-dub4-1.xx&oh=00_AfCDeJwv3mnkvPRvF8Ivxb2XgYzY2gRjHfzaNVaQ3xK5xQ&oe=64569153'
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
