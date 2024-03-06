import Config from "../../data/config";
import OrderForm from "../../components/orderForm";
import { useState } from "react";
import IncluyeGold from "./incluyeGold";
import IncluyeSilver from "./incluyeSilver";
import IncluyeBasica from "./incluyeBasica";



const ModeloInfo = ({ocasion, tipo}) => {

    console.log("ocasion y tipo:", ocasion, tipo);
   

    let precioARS;
    let precioUSD;

    if(tipo==="Gold"){
        precioARS = Config.PriceGoldPromo;
        precioUSD = Config.PriceGoldUSD;
    }else if(tipo==="Silver"){
        precioARS = Config.PriceSilverPromo;
        precioUSD = Config.PriceSilverUSD;
    }else if(tipo==="Basica"){
        precioARS = Config.PriceBasicaPromo;
        precioUSD = Config.PriceBasicaUSD;
    }

    const [precio, setPrecio] = useState(false);

    const togglePrecio = () => {
        setPrecio(!precio)
    }

    return (
        <>
            <div className="text-[#9D5A4D]">
                <h3 className="font-rasputin text-xs">INVITACIONES DIA ESPECIAL</h3>
                <h2 className="font-rasputin uppercase text-2xl">Modelo ocasion: {ocasion} <br/> tipo: {tipo} </h2>
                <div className="flex flex-row gap-4">
                    <p className={` text-sm hover:text-white ${precio===true ? 'font-bold' : 'font-thin'}`} onClick={togglePrecio}>Argentina</p>
                    <p className={` text-sm hover:text-white ${precio===false ? 'font-bold' : 'font-thin'}`} onClick={togglePrecio}>Internacional</p>
                </div>
                <p className="font-nowRegular">{!precio ? precioUSD : precioARS}</p>


                <p className="font-nowRegular pt-2">Tu invitacion digital para enviarla todas las veces que necesites!</p>

                <div className="pt-2">
                    <p className="font-rasputin">Ordenar tu invitacion es muy sencillo:</p>
                    <ol className="font-nowRegular text-xs list-decimal pl-4">
                        <li>Completa y envia el siguiente formulario</li>
                        <li>Envia tus fotos a {Config.DiaEspecialMail}</li>
                        <li>Nos comunicaremos con vos por whatsapp para confirmar la informacion recibida</li>
                        <li>Realizas el pago de 50%</li>
                        <li>Listo! en breve tendras tu invitacion lista para enviar a tus invitados!</li>
                    </ol>
                </div>

                <div className="relative">
                    <OrderForm />
                </div>

                <p className="text-sm font-bold ">Tiempo de entrega:</p>
                <p className="text-xs pl-7">* Diseño existente: 3 dias</p>
                <p className="text-xs pl-7">* Diseño personalizado: 2 semanas</p>

                <div className="pr-16">
                <h2 className="font-bold">Incluye:</h2>
                {tipo === "Gold" && <IncluyeGold />}
                {tipo === "Silver" && <IncluyeSilver />}
                {tipo && "Basica" && <IncluyeBasica />}
                
                </div>
            </div>
        </>
    )
};

export default ModeloInfo;