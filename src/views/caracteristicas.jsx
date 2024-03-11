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


const caract_Gold = [
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
];

const caract_Silver = [
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
        texto:"Tus invitados podran confirmar su asistencia enviandote un mensaje por whatsapp"
    },
    {
        icon: <BsGiftFill />,
        titulo:"lista de regalos",
        texto:"Tus invitados podran acceder a tu lista de regalos externa"
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
        icon: <FaMusic />,
        titulo:"musical",
        texto:"De manera opcional puedes añadir musica de fondo a tu invitacion sin costo adicional "
    },
    {
        icon: <IoShareSocialSharp />,
        titulo:"redes sociales",
        texto:"Seccion opcional y sin costo adicional con links a las redes sociales o hashtag de tu evento"
    }
];

const caract_Basica = [
    {
        icon: <FaMapMarkedAlt />,
        titulo:"ubicacion",
        texto:"Tus invitados accederan a la ubicacion del evento con indicaciones GPS de como llegar"
    },
    {
        icon: <GoChecklist />,
        titulo:"RSVP",
        texto:"Tus invitados podran confirmar su asistencia enviandote un mensaje por whatsapp"
    },
    {
        icon: <BiSolidPhotoAlbum />,
        titulo:"Fotos",
        texto:"De acuerdo al diseño sera el espacio para colocar tu fotografia"
    }
];

const Caracteristicas = () => {
    const [views, setViews] = useState(new Array(caract_Gold.length).fill(true));

    const toggleChange = (index) => {
        setViews(views.map((view, i) => (i === index ? !view : view)));
    };

    const [opciones, setOpciones] = useState("Gold");

    const toggleOpcion = (e) => {
        setOpciones(e);
    }

    let opcionesToREnder;
        if(opciones==="Gold"){
            opcionesToREnder=caract_Gold;
        }else if(opciones==="Silver"){
            opcionesToREnder=caract_Silver;
        }else if(opciones==="Basica"){
            opcionesToREnder=caract_Basica;
        }
    

    return (
        <>
            <div className="bg-cafecito pb-16">
                <div className="flex justify-center pt-10 pb-2">
                    <h1 className="font-now text-marron text-2xl uppercase">Que incluye tu invitacion web:</h1>
                </div>

                <div className="flex justify-center gap-12 text-marron font-rasputin">
                    <button onClick={() => toggleOpcion ("Gold")} className={`hover:text-yellow-600 ${opciones==="Gold" ? 'text-yellow-600 border border-yellow-600 px-2 rounded-2xl' : 'underline'}`}>Gold</button>
                    <button onClick={() => toggleOpcion ("Silver")} className={`hover:text-yellow-600 ${opciones==="Silver" ? 'text-slate-400 border border-slate-400 px-2 rounded-2xl' : 'underline'}`}>Silver</button>
                    <button onClick={() => toggleOpcion ("Basica")} className={`hover:text-yellow-600 ${opciones==="Basica" ? 'text-amber-900 border border-amber-900 px-2 rounded-2xl' : 'underline'}`}>Basica</button>
                </div>

                <div className="flex flex-wrap px-2 md:px-10">
                    {opcionesToREnder.map((caract, index) => (
                        <div key={index} className={`w-1/2 h-[200px] border border-marron py-2 md:w-1/6 ${index % 2 === 0 ? 'bg-cafe1' : 'bg-cafe2'} scale-90 hover:scale-100`} onClick={() => toggleChange(index)}>
                            {views[index] ? (
                                <div className="pt-10">
                                <div className="flex justify-center text-4xl text-marron">{caract.icon}</div>
                                <h2 className="flex justify-center uppercase font-now text-marron text-center">{caract.titulo}</h2>
                                </div>
                            ) : (
                                <p className="text-center font-rasputin text-marron p-2 text-sm md:text-base">{caract.texto}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Caracteristicas;