import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'

function Story() {
  return (
    <MainPage>
      <Header />

      <Footer />
    </MainPage>
  )
}

const MainPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export default Story
