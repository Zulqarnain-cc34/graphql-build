import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles/Components/Home/fieldmembers.css";
interface FieldmembersProps {
    username: string;
    roomid: string;
}

export const Fieldmembers: React.FC<FieldmembersProps> = ({ username, roomid }) => {
    const [seed, setSeed] = useState<number>(0);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [setSeed]);



    //}const handleRooms = (e) => {
    //    e.preventDefault();
    //    roomi

    return (
        <Link className="fieldmembers" to={`/rooms/${roomid}`}>
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                className="fieldmembers-avatar"
            />
            <h2>{username}</h2>
        </Link>
    );
};
