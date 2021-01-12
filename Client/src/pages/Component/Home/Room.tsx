import React from "react";

interface RoomProps {
    name: string;
    adminId: string;
}

export const Room: React.FC<RoomProps> = ({ name, adminId }) => {
    return (
        <div className="room">
            <h2>{name}</h2>
            <h3>{adminId}</h3>
        </div>
    );
};
