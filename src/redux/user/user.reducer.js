import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    loggedUser: null
}

const UserReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.CHECK_USER_LOG:
        case UserActionTypes.LOG_IN:
            return{
                ...state,
                loggedUser: action.payload
            }
        case UserActionTypes.LOG_OUT:
            return {
                ...state,
                loggedUser: null
            }
            default:
                return state;
    }
}

export default UserReducer;