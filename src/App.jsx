import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProductPage from './Pages/Product'
import ProfilePage from './Components/Profile'
const App = () => {
  return (
    <div>
      



      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path="/product/:id" element={<ProductPage/>}/>
         <Route path="/profile" element={<ProfilePage/>}/>
       
      </Routes>
    </div>
  )
}

export default App
