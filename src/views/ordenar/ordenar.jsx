import { useParams } from "react-router-dom";
import NavBar from "../../components/navBar";
import { useDispatch, useSelector } from "react-redux";
import { selectedMod } from "../../redux/actions";
import { useEffect } from "react";

const Ordenar = () => {
    const dispatch = useDispatch();

    const {id} =  useParams();
    console.log("id:", id);

    useEffect(()=>{
        dispatch(selectedMod(id))
    });

    const modSeleccionado = useSelector(state=>state.selected);
    console.log("modSeleccionado:", modSeleccionado);
    
    return (
        <>
    <div>
        se supone que aqui podran ordenar el modelo elegido
    </div>
    </>
        )
}

export default Ordenar;