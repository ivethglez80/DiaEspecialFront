import starsBrown from "./../img/starsBrown.gif"
import toda1 from "./../img/toda (1).png"
import toda2 from "./../img/toda (2).png"
import toda3 from "./../img/toda (3).png"
import toda4 from "./../img/toda (4).png"
import toda5 from "./../img/toda (5).png"
import toda6 from "./../img/toda (6).png"
import toda7 from "./../img/toda (7).png"
import todaL1 from "./../img/todaL (1).png"
import todaL2 from "./../img/todaL (2).png"
import todaL3 from "./../img/todaL (3).png"
import todaL4 from "./../img/todaL (4).png"
import todaL5 from "./../img/todaL (5).png"
import logo from "./../img/logoDiaEspecial.png"



const TodaOcasion = () =>{
    return (
        <>
        <div className="bg-marron flex flex-col">
            <div className="md:flex md:flex-row md:pt-10">
            <div className="pl-4 py-4 md:w-2/5" style={{ backgroundImage: `url(${starsBrown})` }}>
                <h1 className="font-now text-white text-2xl md:pl-20">CUALQUIERA SEA LA OCASION</h1>
                <h1 className="font-now text-white text-2xl md:pl-20">ES TU</h1>                
                <img src={logo} alt="" className="mx-auto py-2"/>
                <h1 className="font-now text-white text-2xl pr-6 flex justify-end">HACE QUE SEA:</h1>
                <h1 className="font-now text-white text-2xl pr-6 flex justify-end">INOLVIDABLE!</h1>
            </div>
            <div className="hidden md:w-3/5 md:flex md:flex-wrap">
                <img src={toda1} alt="" className="md:scale-90"/>
                <img src={toda2} alt="" className="md:scale-90"/>
                <img src={toda3} alt="" className="md:scale-90"/>
                
            </div>
            </div>
        <div className="flex flex-wrap md:pb-10">
            <img src={todaL1} alt="" className="w-1/2 md:w-1/4 md:scale-90"/>
            <img src={todaL2} alt="" className="w-1/2 md:w-1/4 md:scale-90"/>
            <img src={todaL3} alt="" className="w-1/2 md:w-1/4 md:scale-90"/>
            <img src={todaL4} alt="" className="w-1/2 md:w-1/4 md:scale-90"/>            
        </div>
        </div>
        </>
    )
};

export default TodaOcasion;