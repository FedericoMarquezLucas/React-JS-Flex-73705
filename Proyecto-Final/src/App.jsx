import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Alpine from 'alpinejs'
import { Footer, Home, ItemDetailContainer, ItemListContainer, NavBar, NotFound, Cart } from './components'
import { ContextProvider } from './context/context';

function App() {
  // const [count, setCount] = useState(0)

  useEffect(() => {
    window.Alpine = Alpine
    Alpine.start()
  }, [])

  return (
    <ContextProvider>
      <div className='flex flex-col min-h-screen'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<ItemListContainer />} />
          <Route path="/bikes/:brand" element={<ItemListContainer />} />
          <Route path="/bikes/bike/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </ContextProvider>
  )
}

export default App