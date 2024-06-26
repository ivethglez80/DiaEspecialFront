import { GET_CATALOGO, FILTER_TIPO, FILTER_OCASION, SELECTED_MOD, DELETE_MODELO, POST_MODELO } from "./actions";

const initialState = {
    catalogoFull: [],
    catalogoFiltrado: [],
    tipoFiltro: 'Todos',
    tipoOcasion: 'Todos',
    selected: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATALOGO:
            return { ...state, catalogoFull: action.payload, catalogoFiltrado: action.payload };

            case FILTER_TIPO:
                case FILTER_OCASION: {
                    // Extrae los valores actuales necesarios del estado
                    const { catalogoFull, tipoFiltro, tipoOcasion } = state;
                    let nuevoTipoFiltro = tipoFiltro;
                    let nuevoTipoOcasion = tipoOcasion;
                
                    // Actualiza el tipoFiltro o tipoOcasion basado en la acción
                    if (action.type === FILTER_TIPO) {
                        nuevoTipoFiltro = action.payload;
                    } else if (action.type === FILTER_OCASION) {
                        nuevoTipoOcasion = action.payload;
                        // Si se elige primero la ocasión, asegúrate de que el tipoFiltro no sea 'Todos'
                        if (nuevoTipoOcasion !== 'Todos' && nuevoTipoFiltro === 'Todos') {
                            nuevoTipoFiltro = catalogoFull.find(item => item.ocasion === nuevoTipoOcasion)?.tipo || 'Todos';
                        }
                    }
                
                    // Aplica ambos filtros sobre catalogoFull
                    let catalogoFiltrado = catalogoFull.filter(item => {
                        const filtroTipo = nuevoTipoFiltro === 'Todos' || item.tipo === nuevoTipoFiltro;
                        const filtroOcasion = nuevoTipoOcasion === 'Todos' || item.ocasion === nuevoTipoOcasion;
                        return filtroTipo && filtroOcasion;
                    });
                
                    return {
                        ...state,
                        catalogoFiltrado,
                        tipoFiltro: nuevoTipoFiltro,
                        tipoOcasion: nuevoTipoOcasion,
                    };
                }
                

        case SELECTED_MOD : {
            const { catalogoFull } = state;
            let seleccionado = catalogoFull.find(item => item.id === action.payload);
            console.log("catalogoFull:", catalogoFull);
            if (!seleccionado){
                console.log("no hay tal modelo con esed id");
                return state;
            }else{
                
            return {
                ...state, 
                selected: {...seleccionado}
            }
        }
        }

        case DELETE_MODELO:
            return {
                ...state,
                catalogoFull : state.catalogoFull.filter(modelo => modelo.id !== action.payload.id)
            };

        case POST_MODELO:
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default rootReducer;
