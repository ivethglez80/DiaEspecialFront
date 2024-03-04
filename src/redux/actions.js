import axios from "axios";

export const GET_CATALOGO = "GET_CATALOGO"
export const PUT_MODELO = "PUT_MODELO"
export const POST_MODELO = "POST_MODELO"
export const MODIFY_MODELO = "MODIFY_MODELO"

export const FILTER_TIPO = "FILTER_TIPO"
export const FILTER_OCASION = "FILTER_OCASION"

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

export const filterOcasion = () => {
    return {
        type: FILTER_OCASION,
        payload: payload
    }
};

export const filtertipo = (tipo) => {
    return {
        type: FILTER_TIPO,
        payload: tipo
    }
};

