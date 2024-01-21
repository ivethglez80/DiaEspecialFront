import como1 from "./../img/como (1).png"
import como2 from "./../img/como (2).png"
import como3 from "./../img/como (3).png"
import como4 from "./../img/como (4).png"
import { TbSquareRoundedNumber1Filled } from "react-icons/tb";
import { TbSquareRoundedNumber2Filled } from "react-icons/tb";
import { TbSquareRoundedNumber3Filled } from "react-icons/tb";
import { TbSquareRoundedNumber4Filled } from "react-icons/tb";




const ComoOrdenar = () =>{
    return (
        <>
        <div className="bg-celestito md:pt-10">
            <div className="flex justify-center">
                <h1 className="font-now text-white text-3xl uppercase px-5">ORDENAR TU INVITACION ES MUY FACIL:</h1>
            </div>


            <div className="flex flex-col py-10 md:flex-row md:px-40 md:gap-20 md:py-0">

                <div className="w-2/3 mx-auto py-5 md:flex md:flex-col scale-100 hover:scale-105">
                    <img src={como1} alt="" />
                    <div className="bg-white px-2 pb-8 md:h-[160px]">
                        <p className="font-rasputin text-marron text-lg text-center md:text-base">Elige el modelo que mas te guste de nuestro amplio catalogo.</p>
                    </div>
                    <div className="flex justify-center">
                    <TbSquareRoundedNumber1Filled className="text-marron text-4xl -translate-y-4"/>
                    </div>
                </div>    
            

            
                <div className="w-2/3 mx-auto py-5 md:flex md:flex-col scale-100 hover:scale-105">
                    <img src={como2} alt="" />
                    <div className="bg-white px-2 pb-8 md:h-[160px]">
                        <p className="font-rasputin text-marron text-lg text-center md:text-base">Completa el formulario con la informacion necesaria para tu invitacion.</p>
                    </div>
                    <div className="flex justify-center">
                    <TbSquareRoundedNumber2Filled className="text-marron text-4xl -translate-y-4"/>
                    </div>
                </div>    
           

                <div className="w-2/3 mx-auto py-5 md:flex md:flex-col scale-100 hover:scale-105">
                    <img src={como3} alt="" />
                    <div className="bg-white px-2 pb-8 md:h-[160px]">
                        <p className="font-rasputin text-marron text-lg text-center md:text-base">Comparte tu invitacion completamente personalizada y funcional por el medio que desees.</p>
                    </div>
                    <div className="flex justify-center">
                    <TbSquareRoundedNumber3Filled className="text-marron text-4xl -translate-y-4"/>
                    </div>
                </div>    
            

            
                <div className="w-2/3 mx-auto py-5 md:flex md:flex-col scale-100 hover:scale-105">
                    <img src={como4} alt="" />
                    <div className="bg-white px-2 pb-8 md:h-[160px]">
                        <p className="font-rasputin text-marron text-lg text-center md:text-base">Elige el modelo que mas te guste de nuestro amplio catalogo.</p>
                    </div>
                    <div className="flex justify-center">
                    <TbSquareRoundedNumber4Filled className="text-marron text-4xl -translate-y-4"/>
                    </div>
                </div>    
            </div>

        </div>
        </>
    )
};

export default ComoOrdenar;