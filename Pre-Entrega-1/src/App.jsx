import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
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
      <ItemListContainer mensaje={'ACÁ SE VA A RENDERIZAR EL LISTADO INICIAL DE LA GRILLA DE ITEMS'} />
      {/* <Footer /> */}
    </div>
  )
}

export default App