import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Story from './pages/Story'
import Discography from './pages/Discography'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="discography" element={<Discography />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
