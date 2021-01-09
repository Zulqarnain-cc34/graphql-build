import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GET_ROOM } from "../../../context/actionsTypes";
import { useStateValue } from "../../../context/stateProvider";
import { RoomState } from "../../../interfaces";
import "../../../styles/Components/Home/fieldmembers.css";
interface FieldmembersProps {
    username: string;
    room: RoomState;
}

export const Fieldmembers: React.FC<FieldmembersProps> = ({ username, room }) => {
    const [seed, setSeed] = useState<number>(0);
    const { dispatch } = useStateValue();
    const history = useHistory();
    const handleRoom = (e) => {
        e.preventDefault();
        history.push(`/rooms/${parseInt(room.id)}`)
        dispatch({
            type: GET_ROOM,
            payload: { room: room },
        })

    }
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));

    }, [setSeed]);
    return (
        <div className="fieldmembers" onClick={handleRoom}>
            <Avatar
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                className="fieldmembers-avatar"
            />
            <h2>{username}</h2>
        </div >
    );
};
