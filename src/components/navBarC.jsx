import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCatalogo } from "./../redux/actions";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ModeloCard from "./Cards/modeloCard";




const NavBarC = () => {    

    const [ocasionOpen, setOcasionOpen] = useState(false);

    const toggleOcasion = () => {
        setOcasionOpen(!ocasionOpen)
    };

    const [tipoOpen, setTipoOpen] = useState(false);

    const toggleTipo = () => {
        setTipoOpen(!tipoOpen)
    };


    console.log("ocasionOpen:", ocasionOpen);
    console.log("tipoOpen:", tipoOpen);


    return (
        <>
            <div className="bg-cafecito flex justify-between w-full py-1">

                <div className="pl-5 md:pl-20">
                    <h1 className="font-nowRegular md:text-xl text-[#9D5A4D] hover:text-white">
                        <Link to="/">
                            INICIO
                        </Link>
                    </h1>
                </div>

                <div className="flex justify-around gap-3 pr-5 md:gap-12 md:pr-20">

                    <div>
                        {ocasionOpen ? (
                            <h1 className="font-nowRegular md:text-base text-[#9D5A4D] hover:text-white flex flex-row items-center gap-1" onClick={toggleOcasion}>
                                OCASION <IoIosArrowDropupCircle />
                            </h1>
                        ) : (
                            <h1 className="font-nowRegular md:text-base text-[#9D5A4D] hover:text-white flex flex-row items-center gap-1" onClick={toggleOcasion}>
                                OCASION <IoIosArrowDropdownCircle />
                            </h1>
                        )}

                        <ul className={`absolute bg-cafecito px-2 py-2 rounded-b-xl shadow-lg shadow-gray-300
                                      ${ocasionOpen ? "opacity-100 z-10" : "opacity-0 z-[-1]"} transition duration-300 ease-in-out`}>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={toggleOcasion}>Todos</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={toggleOcasion}>Boda</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={toggleOcasion}>Quinceañera</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={toggleOcasion}>Dulces 16</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={toggleOcasion}>Infantil</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={toggleOcasion}>Cumpleaños</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={toggleOcasion}>Otros</li>
                        </ul>
                    </div>

                    <div>
                        {tipoOpen ? (
                            <h1 className="font-nowRegular md:text-base text-[#9D5A4D] hover:text-white flex flex-row items-center gap-1" onClick={toggleTipo}>
                                TIPO <IoIosArrowDropupCircle />
                            </h1>
                        ) : (
                            <h1 className="font-nowRegular md:text-base text-[#9D5A4D] hover:text-white flex flex-row items-center gap-1" onClick={toggleTipo}>
                                TIPO <IoIosArrowDropdownCircle />
                            </h1>
                        )}

                        <ul className={`absolute bg-cafecito px-2 py-2 rounded-b-xl shadow-lg shadow-gray-300
                                      ${tipoOpen ? "opacity-100 z-10" : "opacity-0 z-[-1]"} transition duration-300 ease-in-out`}>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={toggleTipo}>Gold</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={toggleTipo}>Silver</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={toggleTipo}>Basica</li>                            
                        </ul>
                    </div>                    

                </div>
                               
            </div>

        </>
    )
};

export default NavBarC;