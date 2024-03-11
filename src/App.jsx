
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontStore from './views/frontStore'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import DashLogin from './views/DashAdmin/dashLogin'
import CatalogoRouter from './components/catalogoRouter'


function App() {


  return (
    <>
      <Provider store={store}>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrontStore />} />
            <Route path="/catalogo" element={<CatalogoRouter />} />
            <Route path="/login" element={<DashLogin />} />
          </Routes>
        </BrowserRouter>

      </Provider>
    </>
  )
}

export default App
