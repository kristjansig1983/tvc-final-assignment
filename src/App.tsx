import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Story from './pages/Story'
import Discography from './pages/Discography'
import Store from './pages/Store'
import Receipt from './pages/Receipt'
import ReviewOrder from './pages/ReviewOrder'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/store" element={<Store />} />
          <Route path="/reviewOrder" element={<ReviewOrder />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
