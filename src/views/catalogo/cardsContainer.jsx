import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ModeloCard from "../../components/Cards/modeloCard";
import { getCatalogo, filtertipo } from "../../redux/actions"; 


const CardsContainer = () => {

        const dispatch = useDispatch();        

        useEffect(()=>{
            dispatch(getCatalogo());
            dispatch(filtertipo());
        }, [dispatch]);
    
        const catalogoFull = useSelector(state => state.catalogoFull);
        const catalogoFiltrado = useSelector(state => state.catalogoFiltrado); 
        // const catalogoToRender = catalogoFiltrado.length > 0 ? catalogoFiltrado : catalogoFull;      
        console.log("este es el catalogo:", catalogoFull);
        console.log("este es el filtrado:", typeof( catalogoFiltrado));

    return (
        <>        
        <div className="pb-10 flex flex-row flex-wrap gap-10 justify-evenly">
                    {catalogoFiltrado.length>0?(catalogoFiltrado.map(({id, imagen, nombre_modelo, ocasion, tipo, urlSample}) => {
                        return (
                            <>                            
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
                            </>
                        )
                    })):(
                        <p className="text-red-500">No se han encontrado modelos con esas caracteristicas, por favor elija otras opciones</p>
                    )}
                </div>
        </>
    )
};

export default CardsContainer;