import React from 'react'
import styled, { css } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom'

function ReviewOrder() {
  const navigate = useNavigate()

  const receiptPage = () => {
    navigate('/receipt')
  }
  return (
    <div>
      <Header />
      <button onClick={receiptPage}>Receipt</button>
      <Footer />
    </div>
  )
}

export default ReviewOrder
