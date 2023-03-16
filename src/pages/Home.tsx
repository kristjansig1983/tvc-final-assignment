import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from "../components/footer";


function Home() {

    return (
        <HomePage>
            
            <Header />
            
            <Carousel infiniteLoop autoPlay showThumbs={false} showArrows={false}>
            {[
  <Slider>
    <SliderImg
      
      src={
        "https://scontent.frkv2-1.fna.fbcdn.net/v/t39.30808-6/332226585_778356033200759_4350319714811961353_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=vTGcKJJqNOwAX8jsx8L&_nc_ht=scontent.frkv2-1.fna&oh=00_AfDJDhsytnzeJ-lJIm7npLR_LD2lRW2hSVu4MCWJYBjpoA&oe=641833C7"
      }
    ></SliderImg>
  </Slider>,
  <Slider>
  <SliderImg
    
    src={
      "https://scontent.frkv2-1.fna.fbcdn.net/v/t39.30808-6/329593388_595452748608052_6060398424105268395_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=UPEl7qDUvs8AX_vhVEw&_nc_ht=scontent.frkv2-1.fna&oh=00_AfC12Yv-ZSu53EWVZmGagUZvwsYo1qWrQ3tvdH5kTxfkkA&oe=64181F36"
    }
  ></SliderImg>
</Slider>,
<Slider>
    <SliderImg
      
      src={
        "https://scontent.frkv2-1.fna.fbcdn.net/v/t39.30808-6/329685041_531279082433304_4491534593262512513_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=Ltb3QeSLeJQAX-whtwP&_nc_ht=scontent.frkv2-1.fna&oh=00_AfBRDgCVf13bvJ0Q9UAJBTYMYdQQ9MvKlBBsJxlgeml62Q&oe=6418BE9C"
      }
    ></SliderImg>
  </Slider>,
  <Slider>
  <SliderImg
    
    src={
      "https://scontent.frkv2-1.fna.fbcdn.net/v/t39.30808-6/323805238_723566619090192_7483823817535868629_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7f1UKFhQIz8AX9D040H&_nc_ht=scontent.frkv2-1.fna&oh=00_AfBLMe5DXl_i8Qih_EVwCUcTGKo4EwPHxOQPDAZRFWANCw&oe=6418E187"
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

export default Home;