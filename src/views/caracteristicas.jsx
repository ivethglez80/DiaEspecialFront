import { useState } from "react";
import { PiClockCountdownFill } from "react-icons/pi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { BsGiftFill } from "react-icons/bs";
import { GiAmpleDress } from "react-icons/gi";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { GiMeal } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";


const caract_Data = [
    {
        icon: <PiClockCountdownFill />,
        titulo:"cuenta regresiva",
        texto:"La emocion es mayor al compartir juntos cuantos dias, horas, y minutos faltan para tu dia especial"
    },
    {
        icon: <FaMapMarkedAlt />,
        titulo:"ubicacion",
        texto:"Tus invitados accederan a la ubicacion del evento con indicaciones GPS de como llegar"
    },
    {
        icon: <GoChecklist />,
        titulo:"RSVP",
        texto:"Tus invitados podran confirmar su asistencia a traves de  un  intuitivo formulario "
    },
    {
        icon: <BsGiftFill />,
        titulo:"lista de regalos",
        texto:"Tus invitados podran elegir que regalar en un tablero facil de navegar del cual vos tendras control absoluto."
    },
    {
        icon: <GiAmpleDress />,
        titulo:"vestimenta",
        texto:"Habra un espacio dedicado a indicar la vestimenta sugerida a tus invitados para tu evento"
    },
    {
        icon: <BiSolidPhotoAlbum />,
        titulo:"album/carrusel de fotos",
        texto:"Seccion para compartir hasta 15 fotos en un album o un carrusel elegantemete diseñado"
    },
    {
        icon: <FaCalendarCheck />,
        titulo:"agenda",
        texto:"Con solo tocar un boton tus invitados podran agendar tu evento en sus calendarios personales "
    },
    {
        icon: <FaMusic />,
        titulo:"musical",
        texto:"De manera opcional puedes añadir musica de fondo a tu invitacion sin costo adicional "
    },
    {
        icon: <IoShareSocialSharp />,
        titulo:"redes sociales",
        texto:"Seccion opcional y sin costo adicional con links a las redes sociales o hashtag de tu evento"
    },
    {
        icon: <LiaClipboardListSolid />,
        titulo:"tablero de control",
        texto:"Podras ver y modificar la asistencia de tus invitados y la lista de regalos"
    },
    {
        icon: <GiMeal />,
        titulo:"solicitudes especiales",
        texto:"Tus invitados podran hacer solicitudes de necesidades especiales al confirmar su asistencia"
    },
    {
        icon: <FaQuestion />,
        titulo:"consultas",
        texto:"Necesitas alguna seccion especifica? consultanos, lo podemos hacer!"
    },
]

const Caracteristicas = () => {
    const [views, setViews] = useState(new Array(caract_Data.length).fill(true));

    const toggleChange = (index) => {
        setViews(views.map((view, i) => (i === index ? !view : view)));
    };

    return (
        <>
            <div className="bg-cafecito pb-16">
                <div className="flex justify-center pt-10 pb-2">
                    <h1 className="font-now text-marron text-3xl uppercase">Que incluye tu invitacion web:</h1>
                </div>

                <div className="flex flex-wrap px-2 md:px-10">
                    {caract_Data.map((caract, index) => (
                        <div key={index} className={`w-1/2 h-[200px] border border-marron py-2 md:w-1/6 ${index % 2 === 0 ? 'bg-cafe1' : 'bg-cafe2'} scale-90 hover:scale-100`} onClick={() => toggleChange(index)}>
                            {views[index] ? (
                                <div className="pt-10">
                                <div className="flex justify-center text-4xl text-marron">{caract.icon}</div>
                                <h2 className="flex justify-center uppercase font-now text-marron text-center">{caract.titulo}</h2>
                                </div>
                            ) : (
                                <p className="text-center font-rasputin text-marron p-2">{caract.texto}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Caracteristicas;