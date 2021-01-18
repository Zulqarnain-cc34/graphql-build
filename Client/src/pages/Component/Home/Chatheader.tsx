import {
    faCog,
    faEllipsisV,
    faInfoCircle,
    faPlus,
    faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "../../../styles/Components/Home/chatheader.css";
import Star from "../../../icons/star.svg";
import { Icon } from "./Icon";
import { useStateValue } from "../../../context/stateProvider";
import { useCreateRoomMutation } from "../../../generated/graphql";
import { GET_ROOM } from "../../../context/actionsTypes";
interface ChatheaderProps {}

const Chatheader: React.FC<ChatheaderProps> = () => {
    const [name, setname] = useState<string>("");
    const { state, dispatch } = useStateValue();
    const [, createroom] = useCreateRoomMutation();

    const createRoom = async (e) => {
        e.preventDefault();
        const room = await createroom({ name: name });
        dispatch({
            type: GET_ROOM,
            payload: { room },
        });
    };

    return (
        <div className="chatheader">
            <div className="header-left">
                {state.room.id !== "" ? (
                    <h1># {state.room.Roomname}</h1>
                ) : (
                    <h1># Roomname</h1>
                )}
                <div className="header-left-info">
                    <input
                        type="text"
                        onChange={(e) => setname(e.target.value)}
                        className="header-addmember"
                    />
                    {state.room.members !== 0 ? (
                        <p>{state.room.members} members</p>
                    ) : (
                        <p>0 members</p>
                    )}
                    <div className="header-left-info-Add">
                        <Icon
                            type="fonticon"
                            icon={faPlus}
                            onClick={createRoom}
                        />
                        <p>Add member</p>
                    </div>
                </div>
            </div>
            <div className="header-right">
                <Icon type="fonticon" icon={faEllipsisV} />
                <Icon type="fonticon" icon={faCog} />
                <Icon type="img" src={Star} />
                <Icon type="fonticon" icon={faThumbtack} />
                <Icon type="fonticon" icon={faInfoCircle} />
            </div>
        </div>
    );
};
export default React.memo(Chatheader);
