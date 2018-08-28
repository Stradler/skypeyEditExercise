import React from "react";
import store from "../store";
import { setTypingValue, sendMessage, editMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const state = store.getState();
        const { editMode, typing, activeUserId } = state;
        if (editMode){
            store.dispatch(editMessage(editMode, typing,  activeUserId));
        } else {
            store.dispatch(sendMessage(typing, activeUserId));
        }
    };

    return (
        <form className="Message" onSubmit={handleSubmit}>
            <input
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    );
};

export default MessageInput;