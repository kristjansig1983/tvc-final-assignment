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

interface ReviewOrderProps {
  selectedItems: Container[]
}

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
      <h1>Review Order</h1>
      <h2>Selected Items:</h2>
      {selectedItems.map((item: Container) => (
        <div key={item.merchId}>
          <p>Item Name: {item.merchName}</p>
          <p>Item Price: {item.merchPrice}</p>
          <hr />
        </div>
      ))}
      <p>Total Price: {totalOrderPrice}</p>

      <OrderButton type="submit" onClick={placeOrder}>
        Place Order
      </OrderButton>

      <Footer />
    </div>
  )
}

export default ReviewOrder
