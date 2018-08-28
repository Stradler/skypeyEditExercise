import { EDIT_MODE_CHANGE, EDIT_MESSAGE, SET_ACTIVE_USER_ID } from "../actions/constants/action-types";

export default (state = "", action) => {
    switch(action.type){
        case EDIT_MODE_CHANGE:
            return `${action.payload.number}`;
        case EDIT_MESSAGE:
        case SET_ACTIVE_USER_ID:
            return "";
        default:
            return state;
    }
}