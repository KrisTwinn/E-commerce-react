import { CarrelloActionTypes } from "./carrello.types";
import { aggiungiProdotto } from "./carrello.utils";

const INITIAL_STATE = {
    hidden: true,
    carrelloItems: []
};

const CarrelloReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CarrelloActionTypes.TOGGLE_ANTEPRIMA:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CarrelloActionTypes.CHIUDI_CARRELLO:
            return{
                ...state,
                hidden: true
            }
        case CarrelloActionTypes.ADD_PRODOTTO:
            return{
                ...state,
                carrelloItems: aggiungiProdotto(
                    state.carrelloItems,
                    action.payload
                )
            }
        case CarrelloActionTypes.REMOVE_PRODOTTO:
            return{
                ...state,
                carrelloItems: state.carrelloItems.filter(
                    prodotto => prodotto.id !== action.payload.id,
                )
            }
        case CarrelloActionTypes.CANCELLA_ELEMENTO:
                return{
                    ...state,
                    carrelloItems: state.carrelloItems.filter(
                        prodotto => prodotto.id !== action.payload.id,
                    )
                }
        case CarrelloActionTypes.RETRIEVE_CARRELLO:
            return{
                ...state,
                carrelloItems: action.payload
            }

        case CarrelloActionTypes.SVUOTA_CARRELLO:
        case CarrelloActionTypes.SVUOTA_CARRELLO_FE:
                    return{
                        ...state,
                        carrelloItems: []
                    }
            default:
                return state
    }
}

export default CarrelloReducer;