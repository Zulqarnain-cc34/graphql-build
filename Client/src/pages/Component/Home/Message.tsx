import { Avatar } from '@material-ui/core';
import React from 'react'
import "../../../Css/Components/Home/message.css";
interface MessageProps {
    profileimg: string,
    user: string,
    message: string,
    createdAt: string,

}

export const Message: React.FC<MessageProps> = ({ user, profileimg, createdAt, message }) => {
    return (<div className="message">
        <Avatar src={profileimg} className="message-avatar" />
        <div className="message-content">
            <h4>{message}</h4>
            <p>{createdAt}</p>
            <p>{user}</p>
        </div>
    </div>);
}