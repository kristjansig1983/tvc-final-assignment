import React from 'react'
import styled, { css } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import { useLocation } from 'react-router-dom'

interface Container {
  merchId: number
  merchName: string
  merchImgUrl: string
  merchPrice: number
  color: string
}

const ReceiptDiv = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(1, 1fr);
  background-color: black;
  opacity: 0.87;
  color: white;
  height: auto;
  font-family: 'Varela Round';
`

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #100f0f;
  border-radius: 10px;
  width: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  margin: 20px;
`

function Receipt() {
  const location = useLocation()
  const selectedItems: Container[] = location.state

  const totalPrice = selectedItems.reduce(
    (acc, item) => acc + item.merchPrice,
    0
  )

  return (
    <div>
      <Header />
      <ReceiptDiv>
        <ContainerWrapper>
          <h1>Receipt</h1>
          <ul>
            {selectedItems.map((item) => (
              <li key={item.merchId}>
                {item.merchName} {item.merchPrice}kr
              </li>
            ))}
          </ul>
          <p>Total Price: {totalPrice}</p>
        </ContainerWrapper>
      </ReceiptDiv>

      <Footer />
    </div>
  )
}

export default Receipt
