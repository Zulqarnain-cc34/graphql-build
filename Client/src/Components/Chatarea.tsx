import React from "react";
import "../Css/chatarea.css";
import { Room } from "./Room";
interface ChatareaProps {}

export const Chatarea: React.FC<ChatareaProps> = () => {
    return (
        <div className="chatarea">
            <Room />
        </div>
    );
};
