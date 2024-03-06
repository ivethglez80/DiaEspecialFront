import { useParams } from "react-router-dom";
import NavBarO from "../../components/navBarO";
import { useDispatch, useSelector } from "react-redux";
import { selectedMod, getCatalogo } from "../../redux/actions";
import { useEffect, useState } from "react";
import mobileFrame from "./../../img/mobileFrame.png";
import prueba from "./../../img/prueba.png";
import bgRose from "./../../img/bgCatalogueRose.png";
import Footer from "../../components/footer";
import printQr from "./../../img/printQr.png";
import Config from "../../data/config";
import MPLogo from "./../../img/MP-logo.png";
import paypalLogo from "./../../img/paypal-logo.png";
import Politicas from "./politicas";
import ModeloInfo from "./modeloInfo";
import OrderForm from "../../components/orderForm";




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

    const [cardCondiciones, setCardCondiciones] = useState("false");
    const toggleCondiciones = () => {
        setCardCondiciones(!cardCondiciones)
    }

    return (
        <>
            <div className="h-full relative">
                <div className="absolute">
                    <img src={bgRose} alt="backgroudn roses gray" className="fixed object-cover top-0 left-0" />
                </div>
            </div>

            <div className="absolute w-screen">
                <NavBarO />
            </div>

            <div className="flex pb-32">

                <div className="w-1/4 bg-gray-200 h-screen">
                    {/* lado izquierdo que ocupa 1/4 de la pantalla */}
                    <div className="pl-32 ">
                        <p className="relative text-[#9D5A4D] pt-16 text-center"></p>
                        <div className="fixed">
                        <div className="relative w-[166px] h-[309px] rounded-3xl overflow-hidden flex justify-center">
                            <img
                                src={modSeleccionado.urlSample ? modSeleccionado.urlSample : prueba}
                                alt={`modelo: ${modSeleccionado.nombre_modelo} ocasion:${modSeleccionado.ocasion} tipo:${modSeleccionado.tipo} url:${modSeleccionado.urlSample}`}
                                className="absolute w-[160px] h-[303px] bg-white"
                            />
                            <img src={mobileFrame} alt="mobile frame" className="top-0 left-0 absolute" />
                        </div>
                        </div>
                    </div>
                </div>



                <div className="flex-1 h-full overflow-y-auto">
                    {/* lado derecho */}
                    {/*Aqui es el ad con regalo oferta promocion*/}
                    <div className="flex justify-end pt-12">
                        <div className="bg-[#CEB2A8] w-1/2 h-[130px] relative flex justify-end pr-12 rounded-l-3xl animate-fade-left">
                            <img src={printQr} alt="oferta imagen" className="absolute w-[80px] origin-bottom rotate-3 skew-y-3 shadow-lg mr-2" />
                        </div>
                        <div className="absolute w-1/2 flex flex-col animate-fade-left text-gray-600">
                            <p className="text-center pt-2"> REGALO </p>
                            <p className="text-center"> Durante el mes de {Config.mesPromo}</p>
                            <p className="text-xs text-center pt-0 px-40">Tu diseño con codigo QR para imprimir,<br /> sorprenderas a tus invitados que al escanear el codigo QR con sus dispositivo les dirigira a tu invitacion!!</p>
                        </div>
                    </div>
                    {/*Aqui es el ad con rgalo oferta promocion*/}                    

                    <div className="relative pl-36">
                        <ModeloInfo ocasion={modSeleccionado.ocasion} tipo={modSeleccionado.tipo}/>
                    </div>

                    <div className="relative pl-36 text-[#9D5A4D]">
                            <p className="pt-4">Medios de pago:</p>
                            <ul className="list-disc flex flex-row justify-evenly">
                                <li>
                                    <img src={MPLogo} alt="mercado pago logo" className="h-[20px]" />
                                </li>
                                <li>
                                    <img src={paypalLogo} alt="paypal logo" className="h-[17px]" />
                                </li>
                                <li>
                                    <p>Transferencia</p>
                                </li>
                                <li>
                                    <p>Efectivo</p>
                                </li>
                            </ul>

                            <div className="pt-16 pr-6">
                                <div className="flex justify-end">
                                <button onClick={toggleCondiciones} className="underline text-xs text-blue-500">Politicas y condiciones</button>
                                </div>
                                {cardCondiciones === true && 
                                    <Politicas />
                                }
                            </div>
                        </div>
                </div>
            </div>

            <div className="absolute w-screen">
            <Footer />
            </div>
            {/* </div> */}
        </>
    )
}

export default Ordenar;