import React from 'react'
import styled, { css } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

interface ParagraphWithImageProps {
  src: string
  paragraphText: string
  imageOnRight: boolean
}

const ParagraphContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Image = styled.img<{ imageOnRight: boolean }>`
  height: 150px;
  margin-right: ${(props) => (props.imageOnRight ? '20px' : '0')};
  margin-left: ${(props) => (props.imageOnRight ? '0' : '20px')};

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

const Paragraph = styled.p``

const ParagraphWithImage: React.FC<ParagraphWithImageProps> = ({
  src,
  paragraphText,
  imageOnRight,
}) => {
  return (
    <ParagraphContainer>
      {imageOnRight ? (
        <>
          <Paragraph>{paragraphText}</Paragraph>
          <Image src={src} imageOnRight={imageOnRight} />
        </>
      ) : (
        <>
          <Image src={src} imageOnRight={imageOnRight} />
          <Paragraph>{paragraphText}</Paragraph>
        </>
      )}
    </ParagraphContainer>
  )
}

function Story() {
  return (
    <div>
      <Header />
      <ParagraphWithImage
        src='https://i2.wp.com/secretsolstice.is/wp-content/uploads/2019/02/vintage-caravan-main-1.jpg?fit=1200%2C750&ssl=1'
        paragraphText='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        imageOnRight={true}
      />
      <ParagraphWithImage
        src='https://i2.wp.com/secretsolstice.is/wp-content/uploads/2019/02/vintage-caravan-main-1.jpg?fit=1200%2C750&ssl=1'
        paragraphText='Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        imageOnRight={false}
      />
      <ParagraphWithImage
        src='https://i2.wp.com/secretsolstice.is/wp-content/uploads/2019/02/vintage-caravan-main-1.jpg?fit=1200%2C750&ssl=1'
        paragraphText='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        imageOnRight={true}
      />
      <Footer />
    </div>
  )
}

export default Story
