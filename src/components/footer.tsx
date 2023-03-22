import React from 'react'
import styled from 'styled-components'
import { Route, Routes, Navigate } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: black;
  opacity: 0.83;
  grid-area: nav;
  grid-template-columns: repeat(8, 2fr);
  grid-template-areas: 'logo logo button button button button . .';
  border-bottom: 4px solid #b377f8;
  width: 100%;
  height: 10em;
`

const LogoDiv = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: logo;
`

const IconDiv = styled.div`
  justify-self: center;
  justify-content: space-around;
  align-self: center;
  grid-area: button;
`

const Logo = styled.img`
  height: 6em;
`

const SvgButton = styled.path`
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
`

function Footer() {
  return (
    <NavBar>
      <LogoDiv>
        <Logo
          src='https://www.theaudiodb.com/images/media/artist/logo/vintage-caravan-the-555cc9f2304da.png'
          alt='logo'
        />
      </LogoDiv>
      <IconDiv>
        <SvgButton>
          <SocialIcon url='https://www.facebook.com/vintagecaravan/?ref=br_rs' />
        </SvgButton>
        <SvgButton>
          <SocialIcon url='https://twitter.com/_vintagecaravan' />
        </SvgButton>
        <SvgButton>
          <SocialIcon url='https://www.instagram.com/thevintagecaravan/' />
        </SvgButton>
        <SvgButton>
          <SocialIcon url='https://www.youtube.com/watch?v=tMVV8DnnV50' />
        </SvgButton>
        <SvgButton>
          <SocialIcon url='https://music.apple.com/us/artist/the-vintage-caravan/500284446' />
        </SvgButton>
        <SvgButton>
          <SocialIcon url='https://open.spotify.com/artist/61MH29rMIyOfuK7KXQznzX' />
        </SvgButton>
      </IconDiv>
    </NavBar>
  )
}

export default Footer
