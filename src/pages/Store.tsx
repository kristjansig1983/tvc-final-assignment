import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom'
import { OrderButton } from '../components/orderButton'

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
  merchPrice: number
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

const Container = ({
  container,
  addToOrder,
  removeFromOrder,
  isInOrder,
}: {
  container: Container
  addToOrder: (container: Container) => void
  removeFromOrder: (container: Container) => void
  isInOrder: boolean
}) => {
  const handleButtonClick = () => {
    if (isInOrder) {
      removeFromOrder(container)
    } else {
      addToOrder(container)
    }
  }
  return (
    <ContainerWrapper color={container.color}>
      <ImageContainer src={container.merchImgUrl} />
      <h3>{container.merchName}</h3>
      <p>{container.merchPrice}</p>
      <OrderButton onClick={handleButtonClick}>
        {isInOrder ? 'Remove From Order' : 'Add To Order'}
      </OrderButton>
    </ContainerWrapper>
  )
}

function Store() {
  const navigate = useNavigate()
  const [containers, setContainers] = useState<Container[]>([])
  const [selectedItems, setSelectedItems] = useState<Container[]>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://localhost:7181/api/merch')
      const data = await response.json()
      setContainers(data)
    }
    fetchData()
  }, [])

  const addToOrder = (container: Container) => {
    setSelectedItems((prevItems) => [...prevItems, container])
  }

  const removeFromOrder = (container: Container) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.merchId !== container.merchId)
    )
  }

  const reviewOrderPage = () => {
    if (selectedItems.length > 0) {
      navigate('/reviewOrder', { state: { selectedItems } })
    } else {
      alert('Please select at least one item.')
    }
  }

  const isInOrder = (container: Container) => {
    return selectedItems.some((item) => item.merchId === container.merchId)
  }

  return (
    <div>
      <Header />
      <DiscographyDiv>
        <ContainerListWrapper>
          {containers.map((container) => (
            <Container
              key={container.merchId}
              container={container}
              addToOrder={addToOrder}
              removeFromOrder={removeFromOrder}
              isInOrder={isInOrder(container)}
            />
          ))}
        </ContainerListWrapper>
        <OrderButton onClick={reviewOrderPage}>Review Order</OrderButton>
      </DiscographyDiv>

      <Footer />
    </div>
  )
}

export default Store
