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
            <div className="">
                <div className="absolute">
                    <img src={bgRose} alt="backgroudn roses gray" className="fixed object-cover h-full w-full" />
                </div>
            </div>

            <div className="w-screen relative">
                <NavBarO />
            </div>

            <div className="w-screen flex flex-col md:flex-row px-4 pt-4 pb-60">

                <div className="w-screen md:w-1/4 flex justify-start pl-12">{/* esto es el lado izq con el movil*/}
                    <div className="static md:fixed pt-12">
                        <div className="relative w-[166px] h-[309px] rounded-3xl overflow-hidden flex justify-center">
                            <img
                                src={modSeleccionado.imagen ? modSeleccionado.imagen : prueba}
                                alt={`modelo: ${modSeleccionado.nombre_modelo} ocasion:${modSeleccionado.ocasion} tipo:${modSeleccionado.tipo} url:${modSeleccionado.urlSample}`}
                                className="absolute w-[160px] h-[303px] bg-white"
                            />
                            <img src={mobileFrame} alt="mobile frame" className="top-0 left-0 absolute" />
                        </div>
                    </div>
                </div>

                <div className="w-screen md:w-3/4 relative"> {/* esto es el lado derecho */}

                    <div className="flex justify-end pt-12">                        
                        <div className="w-5/6 bg-[#CEB2A8] rounded-l-2xl">{/* aqui el ad de regalo */}
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/4 flex justify-center pl-16">
                                    <img src={printQr} alt="oferta imagen" className="w-[80px] origin-bottom rotate-3 skew-y-3 shadow-lg py-0 md:-translate-x-8" />
                                </div>
                                <div className="md:w-3/4 px-4 pb-2 md:pr-12 md:pt-6">
                                    <div className="flex flex-col animate-fade-left text-gray-600 text-center">
                                        <p className="font-bold"> REGALO </p>
                                        <p className="text-sm text-white"> Durante el mes de {Config.mesPromo}</p>
                                        <p className="text-xs">Tu diseño con codigo QR para imprimir, sorprenderas a tus invitados que al escanear el codigo QR con sus dispositivo les dirigira a tu invitacion!!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="pt-12">
                            <ModeloInfo ocasion={modSeleccionado.ocasion} tipo={modSeleccionado.tipo} modelo={modSeleccionado.nombre_modelo} />
                        </div>
                    </div>

                    <div className="text-[#9D5A4D] pl-12 pt-2 text-sm">
                        <p className="pb-2">Medios de pago:</p>
                        <ul className="list-disc flex flex-col">
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
                    </div>

                    <div className="pt-8 pr-12">
                        <div className="flex justify-end">
                            <button onClick={toggleCondiciones} className="underline text-xs text-blue-500">Politicas y condiciones</button>
                        </div>
                        {cardCondiciones === true &&
                            <Politicas />
                        }
                    </div>


                </div>
            </div>
            <div className="w-screen relative">
                <Footer />
            </div>
        </>
    )
}

export default Ordenar;