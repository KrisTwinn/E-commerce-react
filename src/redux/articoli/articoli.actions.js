import { ArticoliActionTypes } from "./articoli.types";

export const getArticoliStart = articoli => ({
    type: ArticoliActionTypes.GET_ARTICOLI_START,
})

export const getArticoliSuccess = articoli => ({
    type: ArticoliActionTypes.GET_ARTICOLI_SUCCESS,
    payload: articoli
})

export const getArticoliFail = errore => ({
    type: ArticoliActionTypes.GET_ARTICOLI_FAIL,
    payload: errore
})
