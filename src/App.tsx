import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Story from './pages/Story'
import Discography from './pages/Discography'
import Store from './pages/Store'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
