import axios from "axios";

export const GET_CATALOGO = "GET_CATALOGO"
export const PUT_MODELO = "PUT_MODELO"
export const POST_MODELO = "POST_MODELO"
export const MODIFY_MODELO = "MODIFY_MODELO"
export const DELETE_MODELO = "DELETE_MODELO" 

export const FILTER_TIPO = "FILTER_TIPO"
export const FILTER_OCASION = "FILTER_OCASION"
export const SELECTED_MOD = "SELECTED_MOD"


const catalogoURL =  import.meta.env.VITE_CATALOGO_URL || "http://localhost:3001/catalogo";

//const catalogoURL = import.meta.env.VITE_CATALOGO_DEPLOY;

export const getCatalogo = () => {
    return async function (dispatch) {
        try {
            const dbData = await axios.get(catalogoURL);
            const modelos = dbData.data;
            dispatch({ type: GET_CATALOGO, payload: modelos});
        } catch (error) {
            console.error(error);
        }
    }
};

export const filterOcasion = (ocasion) => {
    return {
        type: FILTER_OCASION,
        payload: ocasion
    }
};

export const filtertipo = (tipo) => {
    return {
        type: FILTER_TIPO,
        payload: tipo
    }
};

export const selectedMod = (id) => {
    return {
        type: SELECTED_MOD,
        payload: id
    }
};

export const deleteModelo = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(catalogoURL, {data:{id}});
            dispatch({
                type: DELETE_MODELO,
                payload: {id}
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export const postModelo = (payload) => {
    return async (dispatch)=>{
        try {
            let createModelo = await axios.post(catalogoURL, payload);
            return dispatch({
                type: POST_MODELO,
                payload: createModelo.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
