import Hero from "./hero";
import NavBar from "../components/navBar";
import Beneficios from "./beneficios";
import Testimonios from "./testimonios";
import ComoOrdenar from "./comoOrdenar";
import CatalogoSample from "./catalogoSample";
import Caracteristicas from "./caracteristicas";
import TodaOcasion from "./todaOcasion";
import Contacto from "./contacto";
import Footer from "./../components/footer"

const FrontStore = () =>{
    return (
        <>        
        <NavBar />
        <Hero />  
        <Beneficios />   
        <Testimonios />
        <ComoOrdenar />   
        <CatalogoSample />
        <Caracteristicas />
        <TodaOcasion />
        <Contacto />
        <Footer/>
        </>
    )
};

export default FrontStore;