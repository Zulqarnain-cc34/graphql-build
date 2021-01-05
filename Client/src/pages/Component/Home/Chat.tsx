import React from "react";
import { useParams } from "react-router-dom";
import "../../../styles/Components/Home/chat.css";
import { Chatarea } from "./Chatarea";
import { Chatheader } from "./Chatheader";
interface ChatProps { }

export const Chat: React.FC<ChatProps> = () => {
    const { roomId } = useParams<{ roomId: string }>();
    console.log(roomId);
    return (
        <div className="chat">
            <Chatheader roomId={roomId} />
            <Chatarea roomId={roomId} />
        </div>
    );
};
