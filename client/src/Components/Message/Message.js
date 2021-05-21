import React from 'react';
import { Link } from 'react-router-dom';
import './Message.scss';

function Message(props) {
    return (
        <div className={'message-card '+props.color}>
            <p>{props.message}</p>
            <Link to={props.link}>{props.linkText}</Link>
        </div>
    )
}

export default Message;
