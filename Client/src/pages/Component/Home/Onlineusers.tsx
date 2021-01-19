import { Avatar } from "@material-ui/core";
import React from "react";
import "../../../styles/Components/Home/onlineusers.css";
interface OnlineusersProps {
    username: string;
    profilepic: string;
    status: string;
}

export const Onlineusers: React.FC<OnlineusersProps> = ({
    profilepic,
    username,
    status,
}) => {
    return (
        <div className="online">
            <Avatar src={profilepic} className="online-profile" />
            <div className="online-content">
                <div className="online-content-wrapper">
                    <h3>{username}</h3>
                    <div className="status">{status} </div>
                </div>
                <div className="online-indicator">
                    <div className="status-icon"></div>
                </div>
            </div>
        </div>
    );
};
