import { useState } from 'react'
import Home from './Components/Home/Home'

import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailConainer from './Components/ItemListContainer/ItemDetailConteiner/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 




function App() {
  

  return (
    <>
    <BrowserRouter>


          <Home />

      <Routes>

        <Route exact path='/' element={<ItemListContainer/>} />

        <Route exact path='/item/:id' element={<ItemDetailConainer />} />

        <Route exact path='/products/:category' element={<ItemListContainer />} />

          
     </Routes>


     </BrowserRouter>
     
     
    </>
  )
}

export default App