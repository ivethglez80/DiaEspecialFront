import { Link } from "react-router-dom";
import NavBarC from "../../components/navBarC";
import bgGray from "./../../img/bgCatalogueGray.png";
import Footer from "./../../components/footer";
import NavCatalogo from "./../../components/navCatalogo";
import CardsContainer from "./cardsContainer";


const CatalogoFull = () =>{
    return (
        <>
        <div className="h-screen">
        <NavBarC />
            <div className="relative h-screen overflow-hidden">
                <img src={bgGray} alt="backgroudn roses gray" className="absolute object-cover top-0 left-0 h-screen w-screen"/>
                <div className="relative pt-10">
                <NavCatalogo />
                </div>

                <div className="relative flex justify-center">
                <div className="h-[370px] overflow-y-auto sm:w-11/12">
                    <CardsContainer />
                </div>
                </div>
                
                
            </div>        
        <Footer/>
        </div>
        </>
    )
}

export default CatalogoFull;