import { GET_CATALOGO, FILTER_TIPO, FILTER_OCASION } from "./actions";

const initialState = {
    catalogoFull: [],
    catalogoFiltrado: [],
    tipoFiltro : 'todos'
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATALOGO:
            return {...state, catalogoFull: action.payload };
        
        case FILTER_TIPO:
            const { catalogoFull, tipoFiltro } = state;
            const tipo = action.payload;
            let catalogoFiltrado = [];

            if (tipo === 'Todos') {
                catalogoFiltrado = catalogoFull;
            } else {
                catalogoFiltrado = catalogoFull.filter(item => item.tipo === tipo);
            }
            return {
                ...state,
                catalogoFiltrado,
                tipoFiltro: tipo
            };

        default:
            return {...state};
    }
}

export default rootReducer;
