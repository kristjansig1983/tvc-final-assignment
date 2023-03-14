import React from "react";
import styled from "styled-components";
import { Route, Routes, Navigate } from "react-router-dom";

const NavBar = styled.div`
display: grid;
background-color: #8F61BB;
grid-area: nav;
grid-template-columns: repeat(8, 1fr);
grid-template-areas: 'logo logo button button button button . .';
border-bottom: 4px solid #B377F8;
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