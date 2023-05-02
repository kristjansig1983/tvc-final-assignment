import React from 'react'
import styled, { css } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

interface ParagraphWithImageProps {
  src: string
  paragraphText: string
  imageOnRight: boolean
  imageAltText: string
  imageDescription: string
}

const StoryDiv = styled.div`
  justify-items: center;
  background-color: black;
  opacity: 0.87;
  color: white;
`

const ParagraphContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const Image = styled.img<{ imageOnRight: boolean }>`
  height: 200px;
  margin-right: ${(props) => (props.imageOnRight ? '20px' : '0')};
  margin-left: ${(props) => (props.imageOnRight ? '0' : '20px')};
  float: left;

  ${(props) =>
    props.imageOnRight &&
    css`
      order: 2;
    `}

  ${(props) =>
    !props.imageOnRight &&
    css`
      order: 1;
    `}
`
const ImageDescription = styled.div`
  font-size: 14px;
  color: white;
  margin-top: 10px;
  text-align: center;
`

const Paragraph = styled.p`
  width: 50%;
  font-size: larger;
  font-family: 'Varela Round';
`

const ParagraphWithImage: React.FC<ParagraphWithImageProps> = ({
  src,
  paragraphText,
  imageOnRight,
  imageAltText,
  imageDescription,
}) => {
  return (
    <ParagraphContainer>
      {imageOnRight ? (
        <>
          <Paragraph>{paragraphText}</Paragraph>
          <Image src={src} alt={imageAltText} imageOnRight={imageOnRight} />
        </>
      ) : (
        <>
          <Image src={src} alt={imageAltText} imageOnRight={imageOnRight} />
          <Paragraph>{paragraphText}</Paragraph>
        </>
      )}
      <ImageDescription>{imageDescription}</ImageDescription>
    </ParagraphContainer>
  )
}

function Story() {
  return (
    <div>
      <Header />
      <StoryDiv>
        <ParagraphWithImage
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/20170708_Ballenstedt_RockHarz_The_Vintage_Caravan_0002_The_Vintage_Caravan.jpg/210px-20170708_Ballenstedt_RockHarz_The_Vintage_Caravan_0002_The_Vintage_Caravan.jpg"
          paragraphText="The Vintage Caravan are a rock band from Álftanes, Iceland. The band was formed in 2006 by Óskar Logi Ágústsson and Guðjón Reynisson before bassist Alexander Örn Númason joined after the first studio album. As of 2021, the band have released five studio albums and are currently signed with Napalm Records."
          imageOnRight={true}
          imageAltText="Óskar Logi"
          imageDescription="Óskar Logi Ágústsson"
        />
        <ParagraphWithImage
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/The_Vintage_Caravan_-_Rockspektakel_2017_27.jpg/210px-The_Vintage_Caravan_-_Rockspektakel_2017_27.jpg"
          paragraphText="In 2006, 12 year-old school friends Óskar Logi Ágústsson (guitar and vocals) and Guðjón Reynisson (drums) formed the band. Serious work only began in 2009 and within two years the band self-published their eponymous first album.

          In early 2012, the band signed a deal with Icelandic record label Sena ahead of work for their second album. Alexander Örn Númason joined shortly after on bass. A second album Voyage was released in 2012 initially by Sena. The band signed to Nuclear Blast shortly after the release of Voyage. This led to a Expand Your Mind music video produced and released by the German record label. The short film shows the psychedelic 'trips' the three members experience. As of July 2015, the video reached 400,000 hits on YouTube becoming the most viewed online song by the band. Nuclear Blast re-released Voyage to a much wider audience.
          
          2014 saw the band playing at festivals such as Roadburn Festival, Wacken Open Air and Hard Rock Hell.
          
          In April 2015, the band announced on Facebook that drummer Guðjón Reynisson had left the band for personal reasons however still remained good friends with the remaining band members. In the same post, Stefán Ari was introduced to fans as the new drummer of the band. On 15 May 2015, Arrival was released with Nuclear Blast as the band's third studio album. This was the first record since the recent line-up change.
          
          The band's four studio album Gateways was released in 2018. Two years later the band signed with Napalm Records ahead of the release of the fifth album Monuments. Much like previous albums, Monuments received mostly positive reviews, with Loudersound in particular finishing their 4 out of 5 star review with the sentence 'The Vintage Caravan just get better and better."
          imageOnRight={false}
          imageAltText="Alexander Örn"
          imageDescription="Alexander Örn Númason"
        />
        <ParagraphWithImage
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/20150823_Essen_Turock_Open_Air_The_Vintage_Caravan_0077.jpg/210px-20150823_Essen_Turock_Open_Air_The_Vintage_Caravan_0077.jpg"
          paragraphText="In many interviews, the band have confirmed they are good friends with fellow Nuclear Blast counterparts Blues Pills.

          In 2014 following a tour of Europe, the band moved from Reykjavík, Iceland to Sønderborg, Denmark so that they would be nearer to their record label at the time Nuclear Blast."
          imageOnRight={true}
          imageAltText="Stefán Ari"
          imageDescription="Stefán Ari Stefánsson"
        />
      </StoryDiv>
      <Footer />
    </div>
  )
}

export default Story
