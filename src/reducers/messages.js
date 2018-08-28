import {getMessages } from "../static-data";
import { SEND_MESSAGE, EDIT_MESSAGE, DELETE_MESSAGE } from "../actions/constants/action-types";
import _ from "lodash";

export default (state = getMessages(10), action) => {
    switch (action.type){
        case SEND_MESSAGE: {
            const {message, userId} = action.payload;
            const allUserMsgs = state[userId];
            const number = +_.keys(allUserMsgs).pop() + 1;
            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            }
        }
        
        case EDIT_MESSAGE:
            const {message, number, userId} = action.payload;
            const allUserMsgs = state[userId];
            const is_user_msg = allUserMsgs[number]["is_user_msg"];
            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message + "(edited)",
                        is_user_msg: is_user_msg
                    }
                }
            }

        case DELETE_MESSAGE:
            return state;

        default:
            return state;
    }
}