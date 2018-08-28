import React, { Component } from "react";
import "./Chats.css";
import store from "../store";
import {editModeChange} from "../actions";


const Chat = ({ message, clickHandle }) => {
    const { number, text, is_user_msg } = message;
    return (
        <span onClick={clickHandle.bind(this, number, text)} className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>
            {text}
        </span>
    );
}

class Chats extends Component {
    constructor(props){
        super(props);
        this.chatsRef = React.createRef();
    }
    componentDidMount(){
        this.scrollToBottom();
    }
    componentDidUpdate(){
        this.scrollToBottom();
    }

    handleClick( number, text, e ){
        store.dispatch(editModeChange(number, text));
    }

    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    }
    render() {
        return (
            <div className="Chats" ref={this.chatsRef}>
                {this.props.messages.map(message => (
                    <Chat clickHandle={this.handleClick}  message={message} key={message.number}/>
                ))}
            </div>
        );
    }
}

export default Chats;