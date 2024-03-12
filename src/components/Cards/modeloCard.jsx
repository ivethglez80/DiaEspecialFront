import { Link } from "react-router-dom";
import mobileFrame from "./../../img/mobileFrame.png";
import prueba from "./../../img/prueba.png";

const ModeloCard = ({ id, imagen, nombre_modelo, ocasion, tipo, urlSample }) => {
    

    return (
        <>
        <div>
        <div className="relative w-[166px] h-[309px] rounded-3xl overflow-hidden flex justify-center">
        <img
                src={imagen ? imagen : prueba}
                alt={`modelo: ${nombre_modelo} ocasion:${ocasion} tipo:${tipo} url:${imagen}`}
                className="absolute w-[160px] h-[303px] bg-white"
            />
            <img src={mobileFrame} alt="mobile frame" className="top-0 left-0 absolute"/>            
        </div>

        <div className="flex justify-center gap-2 pt-2">
        <button className="hover:bg-cafecito bg-[#9D5A4D] hover:text-[#9D5A4D] text-cafecito w-[70px] rounded-3xl hover:shadow-xl">
           <a href={urlSample} target="_blank">ver</a> 
        </button>

        <button className="hover:bg-cafecito bg-[#9D5A4D] hover:text-[#9D5A4D] text-cafecito w-[70px] rounded-3xl hover:shadow-xl">
            <Link to={`/catalogo/${id}`}>Ordenar</Link>
        </button>
        </div>
        </div> 
        </>
    )
};

export default ModeloCard;