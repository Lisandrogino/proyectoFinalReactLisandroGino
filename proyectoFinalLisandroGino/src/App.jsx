import { useState } from 'react'
import Home from './Components/Home/Home'

import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
     <ItemListContainer/>
     
     
    </>
  )
}

export default App
