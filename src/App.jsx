import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'

import ProductPage from './Pages/Product'
import ProfilePage from './Components/Profile'
const App = () => {
  return (
    <div>
      
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path="/about" element={<About />} />
         <Route path="/shop" element={<Shop />} />
         <Route path="/contact" element={<Contact />} />
         <Route path='/' element={<Home/>}/>
         <Route path="/product/:id" element={<ProductPage/>}/>
         <Route path="/profile" element={<ProfilePage/>}/>
       
      </Routes>
    </div>
  )
}

export default App

