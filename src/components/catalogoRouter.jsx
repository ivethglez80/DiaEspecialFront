import CatalogoFull from "../views/catalogo/catalogoFull";
import Ordenar from "../views/ordenar/ordenar";
import DashAdmin from "../views/DashAdmin/dashAdmin";
import ModificaModelo from "../views/DashAdmin/modificaModelo";
import PrivateRoute from "../views/DashAdmin/privateRoute";


const CatalogoRouter = () => {
    return (
        <Routes>
        <Route path="/" element={<CatalogoFull />} />
        <Route path="/:id" element={<Ordenar />} />
        <Route path="/admin" element={<PrivateRoute element={DashAdmin} />} />
        <Route path="/admin/:id" element={<PrivateRoute element={ModificaModelo} />} />
      </Routes>
    )
}

export default CatalogoRouter;