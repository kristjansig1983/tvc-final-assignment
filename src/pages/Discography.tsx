import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

const DiscographyDiv = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(5, 1fr);
  background-color: black;
  opacity: 0.87;
  color: white;
  height: auto;
`
const ImageContainer = styled.img`
  width: 50%;
  height: auto;
`

interface Container {
  albumId: number
  albumName: string
  color: string
  albumCoverUrl: string
}

const ContainerWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color};
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  margin: 20px;
  border: 5px solid white;
`

const ContainerListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 50px;
`

function Discography() {
  const [containers, setContainers] = useState<Container[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://localhost:7181/api/albums')
      const data = await response.json()
      setContainers(data)
    }
    fetchData()
  }, [])
  return (
    <div>
      <Header />
      <DiscographyDiv>
        <ContainerListWrapper>
          {containers.map((container) => (
            <ContainerWrapper key={container.albumId} color={container.color}>
              <ImageContainer src={container.albumCoverUrl} />
              {container.albumName}
            </ContainerWrapper>
          ))}
        </ContainerListWrapper>
      </DiscographyDiv>
      <Footer />
    </div>
  )
}

export default Discography
