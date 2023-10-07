import { useState } from 'react'
import Home from './Components/Home/Home'

import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailConainer from './Components/ItemListContainer/ItemDetailConteiner/ItemDetailContainer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
     <ItemListContainer/>
     <ItemDetailConainer ItemId={2}/>
     
     
    </>
  )
}

export default App
