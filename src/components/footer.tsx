import React from "react";
import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";


const NavBar = styled.div`
display: grid;
justify-items: center;
align-items: center;
background-color: #8F61BB;
grid-area: nav;
grid-template-columns: repeat(7, 1fr);
grid-template-areas: 'logo logo button button button button . .';
border-bottom: 4px solid #B377F8;
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

function Footer() {
    return (
        <NavBar>
          <LogoDiv>
            <Logo
              src='https://www.theaudiodb.com/images/media/artist/logo/vintage-caravan-the-555cc9f2304da.png'
              alt='logo'
            />
          </LogoDiv>
          
        </NavBar>
      )
}

export default Footer;