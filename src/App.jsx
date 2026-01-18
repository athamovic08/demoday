import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProductPage from './Pages/Product'

const App = () => {
  return (
    <div>
      



      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path="/product/:id" element={<ProductPage/>}/>
        
      </Routes>
    </div>
  )
}

export default App
