import { Link } from "react-router-dom"
import sample1 from "./../img/sample (1).png"
import sample2 from "./../img/sample (2).png"
import sample3 from "./../img/sample (3).png"
import sample4 from "./../img/sample (4).png"
import sample5 from "./../img/sample (5).png"
import sample6 from "./../img/sample (6).png"

const catalogo_Imgs = [sample1, sample2, sample3, sample4, sample5, sample6];

const CatalogoSample = () =>{
    return (
        <>
        <div className="bg-gradient-to-t from-marron pb-6">
            <div className="flex justify-center pt-4 pb-4">
                <h1 className="font-now text-marron text-3xl uppercase">Algunos modelos:</h1>
            </div>
            <div className="flex flex-nowrap overflow-x-auto custom-scrollbar gap-10 mx-5 py-2">
                <img src={sample1}/>
                <img src={sample2}/>
                <img src={sample3}/>
                <img src={sample4}/>
                <img src={sample5}/>
                <img src={sample6}/>
            </div>
            <div className="flex justify-center pt-6">
            <Link to={"/catalogo"}>
                <button className="font-now text-marron bg-white hover:bg-cafecito rounded-3xl py-2 px-6 hover:shadow-md hover:shadow-white">IR AL CATALOGO</button>
            </Link>
            </div>
        </div>        
        </>
    )
};

export default CatalogoSample;