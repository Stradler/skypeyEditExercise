import { 
    SET_ACTIVE_USER_ID, 
    SET_TYPING_VALUE,
    SEND_MESSAGE,
    EDIT_MESSAGE,
    DELETE_MESSAGE,
    EDIT_MODE_CHANGE
} from "./constants/action-types";

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload:id
});

export const setTypingValue = value => ({
    type: SET_TYPING_VALUE,
    payload: value
});

export const sendMessage = (message, userId) => ({
    type: SEND_MESSAGE,
    payload: {
        message,
        userId
    }
});

export const editMessage = (number, message, userId) => ({
    type: EDIT_MESSAGE,
    payload: {
        number,
        message,
        userId
    }
});

export const deleteMessage = (number, message) => ({
    type: DELETE_MESSAGE,
    payload: {
        number,
        message
    }
});

export const editModeChange = (number, message) => ({
    type: EDIT_MODE_CHANGE,
    payload: {
        number,
        message
    }
});