import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Alpine from 'alpinejs'
import { Footer, Home, Item, ItemListContainer, NavBar, NotFound } from './components'

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
        <Route path="/bikes" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<Item />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App