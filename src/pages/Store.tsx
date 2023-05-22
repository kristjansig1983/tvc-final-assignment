import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

const DiscographyDiv = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  merchId: number
  merchName: string
  merchImgUrl: string
  color: string
}

const ContainerWrapper = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ color }) => color};
  width: auto;
  height: auto;
  background-color: #100f0f;
  border-radius: 10px;
  display: flex;
  color: white;
  font-size: 24px;
  margin: 20px;
`

const ContainerListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;
`

function Store() {
  const [containers, setContainers] = useState<Container[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://localhost:7181/api/merch')
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
            <ContainerWrapper key={container.merchId} color={container.color}>
              <ImageContainer src={container.merchImgUrl} />
              <h3>{container.merchName}</h3>
            </ContainerWrapper>
          ))}
        </ContainerListWrapper>
      </DiscographyDiv>
      <Footer />
    </div>
  )
}

export default Store
