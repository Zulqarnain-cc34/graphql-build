import React from "react";
import "../Css/chat.css";
import { Chatarea } from "./Chatarea";
import { Chatheader } from "./Chatheader";
interface ChatProps {}

export const Chat: React.FC<ChatProps> = () => {
    return (
        <div className="chat">
            <Chatheader />
            <Chatarea />
        </div>
    );
};
