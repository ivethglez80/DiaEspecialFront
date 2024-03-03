import { Link } from "react-router-dom"
import ContactForm from "../components/contactForm";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { TiSocialInstagram } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import divisor from "./../img/contactDiv.png"
import divisorV from "./../img/contactDivV.png"


const Contacto = () =>{
    return (
        <>
        <div id="contacto_section" className="bg-cafecito">
        <div className="bg-celestito my-8 md:flex md:flex-row md:justify-evenly md:h-[420px]">
            <div>
                <ContactForm />
            </div>
            <div>
                <img src={divisor} alt="" className="px-5 py-6 md:hidden block"/>
                <img src={divisorV} alt="" className="py-0 md:h-5/6 md:pt-16 hidden md:block"/>
            </div>
            <div className="md:pt-24">
                <div className="flex flex-row justify-center items-center pb-5">
                <PiWhatsappLogoFill className="text-marron text-5xl"/>
                <p className="font-rasputin text-marron text-xl">Envianos tu consulta.</p>
                </div>

                <div className="flex flex-row justify-center items-center pb-5">
                <TiSocialInstagram className="text-marron text-5xl"/>
                <p className="font-rasputin text-marron text-xl">Envianos tu consulta.</p>
                </div>

                <div className="flex flex-row justify-center items-center pb-5">
                <MdEmail className="text-marron text-5xl"/>
                <p className="font-rasputin text-marron text-xl">Envianos tu consulta.</p>
                </div>

                <div className="flex justify-center pb-5">
            <Link to={"/catalogo"}>
                <button className="bg-marron hover:bg-cafe2 hover:text-marron font-now text-white uppercase px-4 rounded-lg md:text-lg">IR AL CATALOGO</button>
            </Link>
            </div>

            </div>
        </div>
        </div>
        </>
    )
};

export default Contacto;