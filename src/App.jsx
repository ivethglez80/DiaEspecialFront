
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontStore from './views/frontStore'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import DashLogin from './views/DashAdmin/dashLogin'

import CatalogoFull from './views/catalogo/catalogoFull'
import Ordenar from './views/ordenar/ordenar'
import DashAdmin from './views/DashAdmin/dashAdmin'
import ModificaModelo from './views/DashAdmin/modificaModelo'
import PrivateRoute from './views/DashAdmin/privateRoute'


function App() {


  return (
    <>
      <Provider store={store}>

        <BrowserRouter>
        <Routes>
      <Route path="/" element={<FrontStore />} />
      <Route path="/catalogo" element ={<CatalogoFull />} />
      <Route path="/catalogo/:id" element={<Ordenar />} />

      <Route path="/login" element={<DashLogin />} />
      <Route path="/admin" element={<PrivateRoute element={ DashAdmin } />} />
      <Route path="/admin/:id" element={<PrivateRoute element={ModificaModelo} />} />

      </Routes>
        </BrowserRouter>

      </Provider>
    </>
  )
}

export default App
