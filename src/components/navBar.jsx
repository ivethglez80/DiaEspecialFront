import { Link } from "react-router-dom";

const NavBar = () =>{
    return (
        <>
        <div className="bg-marron flex justify-between w-full py-2">

        <div className="pl-5 md:pl-20">
            <h1 className="font-nowRegular md:text-2xl text-white ">INICIO</h1>
        </div>

        <div className="flex justify-around gap-3 pr-5 md:gap-10 md:pr-20">
            <h1 className="font-nowRegular md:text-2xl text-white">
                <Link to="/catalogo">
                CATALOGO
                </Link>    
            </h1>
            <h1 className="font-nowRegular md:text-2xl text-white">
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