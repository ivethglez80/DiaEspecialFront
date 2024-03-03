import { Link } from "react-router-dom";

const NavBar = () =>{
    return (
        <>
        <div className="bg-cafecito flex justify-between w-full py-1">

        <div className="pl-5 md:pl-20">
            <h1 className="font-nowRegular md:text-xl text-[#9D5A4D] "></h1>
        </div>

        <div className="flex justify-around gap-3 pr-5 md:gap-10 md:pr-20">
            <h1 className="font-nowRegular md:text-base text-[#9D5A4D] hover:text-white">
                <Link to="/catalogo">
                CATALOGO
                </Link>    
            </h1>
            <h1 className="font-nowRegular md:text-base text-[#9D5A4D] hover:text-white">
            <a href="#contacto_section">
                CONTACTO
            </a>
            </h1>
        </div>
        
        </div>
        </>
    )
};

export default NavBar;