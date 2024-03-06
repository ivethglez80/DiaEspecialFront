import { useParams } from "react-router-dom";
import NavBarO from "../../components/navBarO";
import { useDispatch, useSelector } from "react-redux";
import { selectedMod, getCatalogo } from "../../redux/actions";
import { useEffect } from "react";
import mobileFrame from "./../../img/mobileFrame.png";
import prueba from "./../../img/prueba.png";
import bgRose from "./../../img/bgCatalogueRose.png";
import Footer from "../../components/footer";
import printQr from "./../../img/printQr.png";
import Config from "../../data/config";

const Ordenar = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    console.log("id:", id);

    useEffect(() => {
        dispatch(getCatalogo())
        dispatch(selectedMod(id))
    }, [dispatch]);

    const modSeleccionado = useSelector(state => state.selected);
    console.log("modSeleccionado:", modSeleccionado);

    return (
        <>
            <NavBarO />
            <div className="relative h-screen overflow-hidden">
                <img src={bgRose} alt="backgroudn roses gray" className="absolute object-cover top-0 left-0" />
                <div className="flex flex-row">
                    <div className="pl-16">
                        <p className="relative text-[#9D5A4D] pt-10 text-center">Felicitaciones! <br/> Has elegido:</p>
                        <div className="relative w-[166px] h-[309px] rounded-3xl overflow-hidden flex justify-center">
                            <img
                                src={modSeleccionado.urlSample ? modSeleccionado.urlSample : prueba}
                                alt={`modelo: ${modSeleccionado.nombre_modelo} ocasion:${modSeleccionado.ocasion} tipo:${modSeleccionado.tipo} url:${modSeleccionado.urlSample}`}
                                className="absolute w-[160px] h-[303px] bg-white"
                            />
                            <img src={mobileFrame} alt="mobile frame" className="top-0 left-0 absolute" />
                        </div>
                    </div>
                
                

                <div className="relative pl-16 w-screen">
                    <div className="flex justify-end pt-6">
                        <div className="bg-[#CEB2A8] w-3/4 h-[130px] relative flex justify-end pr-12 rounded-l-3xl">
                            <img src={printQr} alt="oferta imagen" className="absolute w-[80px] origin-bottom rotate-3 skew-y-3 shadow-lg mr-10"/>
                        </div>
                        <div className="absolute w-1/2 flex flex-col mr-36">
                            <p className="text-center pt-2"> REGALO </p>
                            <p className="text-center"> Durante el mes de {Config.mesPromo}</p>
                            <p className="text-xs text-center pt-4 px-10">Tu diseño y codigo QR para imprimir,<br/> sorprenderas a tus invitados que al escanear el codigo QR con sus dispositivo les dirigira a tu invitacion!!</p>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Ordenar;