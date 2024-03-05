
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontStore from './views/frontStore'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CatalogoFull from './views/catalogo/catalogoFull'
import Ordenar from './views/ordenar/ordenar'

function App() {
  

  return (
    <>
    <Provider store={store}>

     <BrowserRouter>
      <Routes>
      <Route path="/" element={<FrontStore />} />
      <Route path="/catalogo" element ={<CatalogoFull />} />
      <Route path="/catalogo/:id" element={<Ordenar />} />
      </Routes>
     </BrowserRouter>

    </Provider>
    </>
  )
}

export default App
