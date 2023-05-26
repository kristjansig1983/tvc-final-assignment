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

interface ReceiptProps {
  location: {
    state: {
      selectedItems: Container[]
    }
  }
}

function Receipt() {
  const location = useLocation()
  const selectedItems: Container[] = location.state

  const totalPrice = selectedItems.reduce(
    (acc, item) => acc + item.merchPrice,
    0
  )

  return (
    <div>
      <h1>Receipt</h1>
      <ul>
        {selectedItems.map((item) => (
          <li key={item.merchId}>
            {item.merchName}, {item.merchPrice}
          </li>
        ))}
      </ul>
      <p>Total Price: {totalPrice}</p>
    </div>
  )
}

export default Receipt
