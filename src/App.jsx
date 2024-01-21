
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontStore from './views/frontStore'

import './App.css'
import CatalogoFull from './views/catalogoFull'

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<FrontStore />} />
      <Route path="/catalogo" element ={<CatalogoFull />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
