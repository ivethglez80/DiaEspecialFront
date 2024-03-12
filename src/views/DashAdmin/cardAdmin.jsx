import mobileFrame from "./../../img/mobileFrame.png";
import { Link } from "react-router-dom";
import prueba from "./../../img/prueba.png";
import { useDispatch } from "react-redux";
import { deleteModelo } from "./../../redux/actions";



const CardAdmin = ({ id, imagen, nombre_modelo, ocasion, tipo, urlSample }) => {

    const dispatch = useDispatch();

    const delModelo = () => {
        if (window.confirm("Estas seguro que quieres eliminar este modelo?")) {
            dispatch(deleteModelo(id));
        }
    }

    return (
        <>
        <div className="">

            <div className="flex flex-col items-center">
                <div className="relative w-[166px] h-[309px] rounded-3xl overflow-hidden flex justify-center">
                    <img
                        src={imagen ? imagen : prueba}
                        alt={`modelo: ${nombre_modelo} ocasion:${ocasion} tipo:${tipo} url:${imagen}`}
                        className="absolute w-[160px] h-[303px] bg-white"
                    />
                    <img src={mobileFrame} alt="mobile frame" className="top-0 left-0 absolute" />
                </div>

                <div className="flex justify-center gap-2 pt-2">
                    <button className="hover:bg-cafecito bg-[#9D5A4D] hover:text-[#9D5A4D] text-cafecito w-[70px] rounded-3xl hover:shadow-xl">
                        <a href={urlSample} target="_blank">ver</a>
                    </button>

                    <button className="hover:bg-cafecito bg-[#9D5A4D] hover:text-[#9D5A4D] text-cafecito w-[70px] rounded-3xl hover:shadow-xl">
                        <Link to={`/admin/${id}`}>Modificar</Link>
                    </button>

                    <button onClick={delModelo} className="hover:bg-cafecito bg-[#9D5A4D] hover:text-[#9D5A4D] text-cafecito w-[70px] rounded-3xl hover:shadow-xl">
                        Eliminar
                    </button>

                </div>
            </div>
        </div>
        </>
    )
};

export default CardAdmin;