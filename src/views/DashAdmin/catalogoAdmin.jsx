import { useDispatch, useSelector } from "react-redux";
import CardAdmin from "./cardAdmin";
import { useEffect } from "react";
import { getCatalogo } from "../../redux/actions";

const CatalogoAdmin = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCatalogo());        
    }, [dispatch]);

    const catalogoFull = useSelector(state => state.catalogoFull);
    console.log("este es el catalogo:", catalogoFull);


    return (
        <>
        <div className="h-full flex flex-wrap gap-24">
            
            {
                catalogoFull.length > 0 ? (
                    catalogoFull.map(({id, imagen, nombre_modelo, ocasion, tipo, urlSample}) => {
                        return (
                            <>
                            <div className="">
                            <CardAdmin 
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
                    })
                ):(
                    <p>el catalogo esta vacio</p>
                )
            }
            
        </div>
        </>
    )
};

export default CatalogoAdmin;