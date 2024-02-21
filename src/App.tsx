
import { useRef } from 'react'
import './App.scss'
import Navbar from './components/navbar'
import PanelAbout from './components/panel-about'
import PanelProducts from './components/panel-products'

function App() {

  const panelProductsRef = useRef(null)
  const panelAboutRef = useRef(null)

  return (
    <>
      <Navbar aboutRef={panelAboutRef}  productRef={panelProductsRef}/>
      <PanelProducts ref={panelProductsRef} />
      <PanelAbout ref={panelAboutRef} />
    </>
  )
}

export default App
