
import Home from './Components/Home/Home'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailConainer from './Components/ItemListContainer/ItemDetailConteiner/ItemDetailContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import CartPage from './Components/Cart/CartPage'
import { CartProvider } from '../src/Context/CartContext'




function App() {
  
  
  return (
    <>

    <CartProvider>
    <BrowserRouter>


          <Home />

      <Routes>

        <Route exact path='/' element={<ItemListContainer/>} />

        <Route exact path='/item/:id' element={<ItemDetailConainer />} />

        <Route exact path='/products/:category' element={<ItemListContainer />} />

        <Route exact path='/carrito' element={<CartPage />} />

          
     </Routes>


     </BrowserRouter>

     </CartProvider>

     

    </>
  )
}

export default App