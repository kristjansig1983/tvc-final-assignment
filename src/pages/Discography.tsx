import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

const DiscographyDiv = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(1, 1fr);
  background-color: black;
  opacity: 0.87;
  color: white;
  height: auto;
  font-family: 'Varela Round';
`
const ImageContainer = styled.img`
  width: 300px;
  height: 300px;
  padding: 10px;
  margin: 10px;
`

interface Container {
  albumId: number
  albumName: string
  color: string
  albumCoverUrl: string
  songs: Array<{
    songId: number
    songName: string
  }>
}

const ContainerWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  background-color: #100f0f;
  border-radius: 10px;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  margin: 20px;
`

const ContainerListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
              <h1>{container.albumName}</h1>
              <ol>
                {container.songs.map((song) => (
                  <li key={song.songId}>{song.songName}</li>
                ))}
              </ol>
            </ContainerWrapper>
          ))}
        </ContainerListWrapper>
      </DiscographyDiv>
      <Footer />
    </div>
  )
}

export default Discography
