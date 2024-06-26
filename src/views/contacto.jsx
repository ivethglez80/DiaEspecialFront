import { Link } from "react-router-dom"
import ContactForm from "../components/contactForm";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { TiSocialInstagram } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
import divisor from "./../img/contactDiv.png";
import divisorV from "./../img/contactDivV.png";
import Config from "./../data/config";


const Contacto = () => {
    return (
        <>
            <div id="contacto_section" className="bg-cafecito">
                <div className="bg-celestito my-8 md:flex md:flex-row md:justify-evenly md:h-[420px]">
                    <div>
                        <ContactForm />
                    </div>
                    <div>
                        <img src={divisor} alt="" className="px-5 py-6 md:hidden block" />
                        <img src={divisorV} alt="" className="py-0 md:h-5/6 md:pt-16 hidden md:block" />
                    </div>
                    <div className="md:pt-24">

                        <a href={`https://wa.me/${Config.mobile}?text=${encodeURIComponent(Config.mensaje)}`} target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-row justify-center items-center pb-8 hover:scale-110">
                            <PiWhatsappLogoFill className="text-[#9D5A4D] text-4xl" />
                            <p className="font-rasputin text-[#9D5A4D] text-base md:text-xl">Envianos tu consulta.</p>
                        </div>
                        </a>

                        <a href="https://www.instagram.com/invitaciones.diaespecial/" target="_blank">
                            <div className="flex flex-row justify-center items-center pb-8 hover:scale-110">
                                <TiSocialInstagram className="text-[#9D5A4D] text-4xl" />
                                <p className="font-rasputin text-[#9D5A4D] text-base md:text-xl">@Invitaciones.DiaEspecial</p>
                            </div>
                        </a>

                        <a href="mailto:invitaciones.diaespecial@gmail.com">
                            <div className="flex flex-row justify-center items-center pb-8 hover:scale-110">
                                <MdEmail className="text-[#9D5A4D] text-4xl" />
                                <p className="font-rasputin text-[#9D5A4D] text-xs md:text-xl">invitaciones.diaespecial@gmail.com
                                </p>
                            </div>
                        </a>

                        <div className="flex justify-center pb-5">
                            <Link to={"/catalogo"}>
                                <button className="bg-[#9D5A4D] hover:bg-cafe2 hover:text-[#9D5A4D] font-now text-white uppercase px-4 rounded-lg md:text-lg hover:border hover:border-[#9D5A4D]">IR AL CATALOGO</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Contacto;