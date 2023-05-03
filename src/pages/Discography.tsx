import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

const DiscographyDiv = styled.div`
  justify-items: center;
  background-color: black;
  opacity: 0.87;
  color: white;
  height: 100vh;
`
/* useEffect(() => {
  async function fetchData() {
    const response = await fetch('https://api.punkapi.com/v2/beers')
    const data = await response.json()
  }
  fetchData()
}) */

function Discography() {
  return (
    <div>
      <Header />
      <DiscographyDiv></DiscographyDiv>
      <Footer />
    </div>
  )
}

export default Discography
