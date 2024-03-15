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
            <div className="relative h-screen overflow-hidden pb-10">
                <img src={bgGray} alt="backgroudn roses gray" className="absolute object-cover top-0 left-0 h-screen w-screen"/>
                <div className="relative pt-8">
                <NavCatalogo />
                </div>

                <div className=" h-full overflow-y-auto relative flex justify-center bg-red-300">
                <div className="sm:w-11/12">
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