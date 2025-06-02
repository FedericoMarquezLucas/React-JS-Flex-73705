import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Item from './components/Item/Item.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import Footer from './components/Footer/Footer.jsx'
import Alpine from 'alpinejs'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    window.Alpine = Alpine
    Alpine.start()
  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motos" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<Item />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App