import { Link } from "react-router-dom";
import NavBarC from "../../components/navBarC";
import bgGray from "./../../img/bgCatalogueGray.png";
import Footer from "./../../components/footer";
import NavCatalogo from "./../../components/navCatalogo";
import CardsContainer from "./cardsContainer";


const CatalogoFull = () =>{
    return (
        <>
        <NavBarC />
        <div className="h-screen">
            <div className="relative h-screen overflow-hidden">
                <img src={bgGray} alt="backgroudn roses gray" className="absolute top-0 left-0 object-cover"/>
                <div className="relative pt-20">
                <NavCatalogo />
                </div>

                <div className="relative">
                    <CardsContainer />
                </div>
            </div>        
        </div>
        <Footer />
        </>
    )
}

export default CatalogoFull;