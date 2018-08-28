import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUserId";
import messages from "./messages";
import typing from "./typing";
import editMode from "./editMode";
import { combineReducers } from "redux";

export default combineReducers({
    user,
    contacts,
    activeUserId,
    messages,
    typing,
    editMode
});