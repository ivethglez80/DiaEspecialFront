import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import ModeloCard from "./Cards/modeloCard";
import { filtertipo, filterOcasion } from "./../redux/actions";




const NavBarC = () => {  
    
    const dispatch = useDispatch();

    const handleTipoChange = (tipo) => {
        dispatch (filtertipo(tipo)); 
        console.log("tipo:", tipo);  
        toggleTipo();  
        setTipoNombre(tipo);   
    };

    const handleOcasionChange = (ocasion) => {
        dispatch (filterOcasion(ocasion));
        console.log("ocasion:", ocasion);
        toggleOcasion();
        setOcasionNombre(ocasion);
    }

    const [ocasionOpen, setOcasionOpen] = useState(false);
    const [ocasionNombre, setOcasionNombre] = useState ("Todos");
    const toggleOcasion = () => {
        setOcasionOpen(!ocasionOpen)
    };

    const [tipoOpen, setTipoOpen] = useState(false);
    const [tipoNombre, setTipoNombre] =  useState("Todos");
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
                        <p className="font-Rasputin text-[#9D5A4D]">{ocasionNombre}</p>
                        <ul className={`absolute bg-cafecito px-2 py-2 rounded-b-xl shadow-lg shadow-gray-300
                                      ${ocasionOpen ? "opacity-100 z-10" : "opacity-0 z-[-1]"} transition duration-300 ease-in-out`}>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={()=>handleOcasionChange('Todos')}>Todos</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={()=>handleOcasionChange('Boda')}>Boda</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={()=>handleOcasionChange('Quince')}>Quinceañera</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={()=>handleOcasionChange('Dulces')}>Dulces 16</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={()=>handleOcasionChange('Infantil')}>Infantil</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={()=>handleOcasionChange('Cumple')}>Cumpleaños</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={()=>handleOcasionChange('Otros')}>Otros</li>
                        </ul>
                    </div>

                    <div>
                        
                        {tipoOpen ? (
                            <h1 className="font-nowRegular md:text-base hover:text-[#9D5A4D] text-white flex flex-row items-center gap-1" onClick={toggleTipo}>
                                cerrar <IoIosArrowDropupCircle />
                            </h1>
                        ) : (
                            <h1 className="font-nowRegular md:text-base text-[#9D5A4D] hover:text-white flex flex-row items-center gap-1" onClick={toggleTipo}>
                                TIPO <IoIosArrowDropdownCircle />
                            </h1>
                        )}
                        <p className="font-Rasputin text-[#9D5A4D]">{tipoNombre}</p>
                        <ul className={`absolute bg-cafecito px-2 py-2 rounded-b-xl shadow-lg shadow-gray-300
                                      ${tipoOpen ? "opacity-100 z-10" : "opacity-0 z-[-1]"} transition duration-300 ease-in-out`}>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={()=>handleTipoChange('Todos')}>Todos</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={()=>handleTipoChange('Gold')}>Gold</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={()=>handleTipoChange('Silver')}>Silver</li>
                            <li className="font-fuente4 text-[#9D5A4D] text-center hover:text-white" onClick={()=>handleTipoChange('Basica')}>Basica</li>                            
                        </ul>
                    </div>                    

                </div>
                               
            </div>

        </>
    )
};

export default NavBarC;