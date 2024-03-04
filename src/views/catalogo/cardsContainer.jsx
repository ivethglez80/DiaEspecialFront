import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ModeloCard from "../../components/Cards/modeloCard";
import { getCatalogo } from "../../redux/actions"; 


const CardsContainer = () => {

        const dispatch = useDispatch();

        useEffect(()=>{
            dispatch(getCatalogo());
        }, [dispatch]);
    
        const catalogoFull = useSelector(state => state.catalogoFull);
        console.log("este es el catalogo:", catalogoFull);

    return (
        <>
        <div className=" h-3/4 overflow-y-auto custom-scrollbar">
                    {catalogoFull.map(({id, imagen, nombre_modelo, ocasion, tipo, urlSample}) => {
                        return (
                            <div>
                            <ModeloCard 
                            id={id}
                            imagen={imagen}
                            nombre_modelo={nombre_modelo}
                            ocasion = {ocasion}
                            tipo = {tipo}
                            urlSample = {urlSample}
                            />
                            </div>
                        )
                    })}
                </div>
        </>
    )
};

export default CardsContainer;