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
        <div className="bg-celestito my-8 md:flex md:flex-row md:justify-evenly">
            <div>
                <ContactForm />
            </div>
            <div>
                <img src={divisor} alt="" className="px-5 pb-10 md:hidden block"/>
                <img src={divisorV} alt="" className="py-5 hidden md:block"/>
            </div>
            <div className="md:pt-36">
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
                <button className="font-now text-marron bg-white rounded-3xl py-2 px-6">IR AL CATALOGO</button>
            </Link>
            </div>

            </div>
        </div>
        </div>
        </>
    )
};

export default Contacto;