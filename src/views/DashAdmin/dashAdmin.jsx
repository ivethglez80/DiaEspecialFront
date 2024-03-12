import { useNavigate } from "react-router-dom";
import CatalogoAdmin from "./catalogoAdmin";
import ModificaModelo from "./modificaModelo";
import NewModelo from "./newModelo";
import { useState } from "react";





const DashAdmin = () => {

    const navigate = useNavigate();


    const handleLogOut = () => {
        localStorage.removeItem('userToken');
        navigate('/login');
    }
    
    const [viewCatalogo, setViewCatalogo] = useState(true);
    const [viewNewModelo, setViewNewModelo] = useState(false);

    const handleViewCatalogo = () => {
        setViewCatalogo(true);
        setViewNewModelo(false);
    };

    const handleViewNewModelo = () => {
        setViewCatalogo(false);
        setViewNewModelo(true);
    }



    return (
        <>
            <div>
                <div>
                    <button onClick={handleLogOut} className="font-fuente1 text-color2 underline text-base pl-5 pr-2">Cerrar <br /> Sesion</button>
                </div>

                <div>
                    <button onClick={handleViewCatalogo} className="bg-gray-400 hover:bg-gray-200 rounded-xl px-2 mx-10 my-6 py-2 text-white hover:text-black">
                        Cargar nuevo modelo
                    </button>
                    <button onClick={handleViewNewModelo} className="bg-gray-400 hover:bg-gray-200 rounded-xl px-2 mx-10 my-6 py-2 text-white hover:text-black">
                        Ver el catalogo
                    </button>
                </div> 

                <div>
                    {viewCatalogo ? <NewModelo /> : ""}
                    {viewNewModelo ? <CatalogoAdmin /> : ""}
                </div>               
            </div>
        </>
    )
};

export default DashAdmin;