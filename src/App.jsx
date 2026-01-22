import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Shop from './Pages/Shop'
import Buy from './Pages/Buy'
import ProductPage from './Pages/Product'
import ProfilePage from './Components/Profile'
import Cart from './Pages/Cart'
import Books from './Pages/Books'

const App = () => {
  return (
    <div>
      
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path="/about" element={<About />} />
         <Route path="/books" element={<Books/>} />
         <Route path="/shop" element={<Shop />} />
         <Route path="/contact" element={<Contact />} />
         <Route path='/cart' element={<Cart/>}/>
         <Route path="/product/:id" element={<ProductPage/>}/>
         <Route path="/profile" element={<ProfilePage/>}/>
         <Route path='/buy' element={<Buy/>}></Route>
       
      </Routes>
    </div>
  )
}

export default App

