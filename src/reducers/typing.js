import { SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MODE_CHANGE, EDIT_MESSAGE, SET_ACTIVE_USER_ID } from "../actions/constants/action-types";

export default function typing(state = "", action) {
    switch(action.type) {
        case SET_TYPING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
        case EDIT_MESSAGE:
        case SET_ACTIVE_USER_ID:
            return "";
        case EDIT_MODE_CHANGE:
            return action.payload.message;


        default:
            return state;
    }
}