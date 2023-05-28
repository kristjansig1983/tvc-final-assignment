import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import { useNavigate, useLocation } from 'react-router-dom'
import { OrderButton } from '../components/orderButton'

interface Container {
  merchId: number
  merchName: string
  merchImgUrl: string
  merchPrice: number
  color: string
}

const ReviewDiv = styled.div`
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
  height: auto;
  display: flex;
  justify-content: left;
  align-content: center;
  align-items: center;
  color: white;
  font-size: 24px;
  margin: 20px;
`

const Review = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: 40em;
  width: 35em;
`
const ItemParagraph = styled.p`
  display: flex;
  align-self: center;
`

function ReviewOrder() {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedItems: Container[] = location.state.selectedItems

  const placeOrder = () => {
    if (selectedItems.length > 0) {
      navigate('/receipt', { state: selectedItems })
    } else {
      alert('Please select at least one item.')
    }
  }

  const totalOrderPrice = selectedItems.reduce(
    (total: number, item: Container) => total + item.merchPrice,
    0
  )

  return (
    <div>
      <Header />
      <ReviewDiv>
        <ContainerWrapper>
          <Review>
            <h1>Review Order</h1>
            <h2>Selected Items:</h2>
            {selectedItems.map((item: Container) => (
              <div key={item.merchId}>
                <ItemParagraph>
                  {' '}
                  {item.merchName} {item.merchPrice}kr
                </ItemParagraph>
              </div>
            ))}
            <p>Total Price: {totalOrderPrice}</p>

            <OrderButton type="submit" onClick={placeOrder}>
              Place Order
            </OrderButton>
          </Review>
        </ContainerWrapper>
      </ReviewDiv>
      <Footer />
    </div>
  )
}

export default ReviewOrder
