import React from 'react'
import styled from 'styled-components'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { MenuButton } from './menuButton'
import Story from '../pages/Story'
import Home from '../pages/Home'
import Discography from '../pages/Discography'

const NavBar = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: black;
  opacity: 0.83;
  grid-area: nav;
  grid-template-columns: repeat(7, 1fr);
  grid-template-areas: 'logo logo button button button button . .';
  width: 100%;
`

const LogoDiv = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: logo;
`

const ButtonDiv = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: button;
`

const Logo = styled.img`
  height: 10em;
`

function Header() {
  const navigate = useNavigate()

  const storyPage = () => {
    navigate('/Story')
  }

  const homePage = () => {
    navigate('/')
  }

  const discographyPage = () => {
    navigate('/Discography')
  }

  const storePage = () => {
    navigate('/Store')
  }

  let isHomeSelected = false
  let isDishSelected = false
  let isDrinkSelected = false
  let isOrderSelected = false
  if (window.location.pathname === '/') {
    isHomeSelected = true
  } else {
    isHomeSelected = false
  }
  if (window.location.pathname === '/Dish') {
    isDishSelected = true
  } else {
    isDishSelected = false
  }
  if (window.location.pathname === '/Drink') {
    isDrinkSelected = true
  } else {
    isDrinkSelected = false
  }
  if (window.location.pathname === '/Order') {
    isOrderSelected = true
  } else {
    isOrderSelected = false
  }
  return (
    <NavBar>
      <LogoDiv>
        <Logo
          src="https://www.theaudiodb.com/images/media/artist/logo/vintage-caravan-the-555cc9f2304da.png"
          alt="logo"
        />
      </LogoDiv>
      <ButtonDiv>
        <MenuButton onClick={homePage}>Home</MenuButton>
        <MenuButton onClick={storyPage}>History</MenuButton>
        <MenuButton onClick={discographyPage}>Discography</MenuButton>
        <MenuButton onClick={storePage}>Store</MenuButton>
      </ButtonDiv>
    </NavBar>
  )
}

export default Header
