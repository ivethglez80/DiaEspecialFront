import { useState } from "react";
import cellphone from "./../img/cellphone.png"
import cellphoneXL from "./../img/cellphoneXL.png"
import starsLong from "./../img/starsLong.gif"
import { IoStar } from "react-icons/io5"

const Beneficios_Data = [
    {
        titulo: "Facilidad y Comodidad",
        texto: "Las invitaciones digitales eliminan las barreras de distancia y tiempo. Tus invitados pueden recibir y responder a tu invitación al instante, sin importar en qué parte del mundo se encuentren! ",
    },
    {
        titulo: "Diseño personalizado",
        texto: "En Dia Especial tenemos gran variedad de diseños para  que puedas elegir el que refleje verdaderamente tu personalidad y el tema del tu evento. ",
    },
    {
        titulo: "Menor costo, mas amor",
        texto: "Las invitaciones digitales son una opción mucho más económica en comparación con las tradicionales de papel. a la vez de reducir el impacto ambiental al evitar el uso de papel y tinta, y disminuyendo la huella de carbono asociada con el envío físico.",
    },
    {
        titulo: "Experiencia interactiva",
        texto: "Con nosotros vas a ofrecer una experiencia mucho más interactiva y dinámica que agrega  conveniencia y emoción que las invitaciones tradicionales simplemente no pueden igualar.",
    },
    {
        titulo: "Cercania a tus invitados",
        texto: "A diferencia de las invitaciones de papel, que pueden perderse o olvidarse fácilmente en un cajón, las invitaciones digitales están siempre accesibles en los dispositivos electrónicos de tus invitados. Esto garantiza que la información del evento esté siempre al alcance de la mano, mejorando la organización tanto para los anfitriones como para los invitados. ",
    },
    {
        titulo: "Informacion actualizable",
        texto: "Además, puedes actualizar fácilmente los detalles del evento si es necesario, y tus invitados recibirán las actualizaciones en tiempo real.",
    }
]


const Beneficios = () => {
    const [showText, setShowText] = useState(-1);
    const toggleText = (index) => {
        setShowText((prevIndex) => (prevIndex === index ? -1 : index));
    }

    return (
        <>
            <div className="">
                
                    
                    <div className="flex flex-row items-center justify-center gap-2 md:gap-5 px-6" style={{ backgroundImage: `url(${starsLong})` }}>
                        <h1 className="font-nowBold uppercase text-marron z-[50] relative py-8 md:text-2xl">Hace que este dia especial sea:</h1><h1 className="font-angelina text-marron text-2xl md:text-5xl">inolvidable!</h1>
                    </div>                    
                

                <div className="bg-gradient-to-b from-celestito py-5 md:flex md:flex-row">
                    <div className="md:w-3/5">{/* contenedores de befeficios_Data*/}
                        {Beneficios_Data.map((benef, index) => (
                            <div key={index} className="bg-celestito p-3 rounded-xl shadow-xl mb-5 mx-8 md:pl-3 md:p-0">
                                <div onClick={() => toggleText(index)} className="flex flex-row gap-2">
                                    <IoStar className="text-marron hover:animate-spin"/>
                                    <h2 className="font-nowBold uppercase text-base text-marron">{benef.titulo}</h2>
                                </div>
                                <p className={`font-rasputin text-marron ${showText === index ? "block" : "hidden"}`}>
                                    {benef.texto}
                                </p>
                                <button onClick={() => toggleText(index)} className="text-marron underline pt-2 md:pt-0">
                                    {showText === index ? "ocultar" : "ver"}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center md:w-2/5 md:h-[400px]">
                        <img src={cellphoneXL} alt="" />
                    </div>
                </div>
            </div>
            
        </>
    )
};

export default Beneficios;