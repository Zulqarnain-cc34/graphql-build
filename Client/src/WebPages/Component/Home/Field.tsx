import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../Css/Components/Home/field.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useGetroomsQuery } from "../../../generated/graphql";
import { Fieldmembers } from "./Fieldmembers";
//import { useUser } from "../context";
interface FieldProps {
    fieldname: string;
    type: string;
}

export const Field: React.FC<FieldProps> = ({ fieldname, type }) => {
    //const [rooms] = useGetroomsQuery({ variables: { limit: 4 } });
    const [{ data }] = useGetroomsQuery({ variables: { limit: 10 } });
    console.log(data);
    //const { user } = useUser();
    //console.log(rooms.data);
    return (
        <div className="field">
            <div className="field-info">
                <h2>{fieldname}</h2>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="field-info-icon"
                />
            </div>
            <div className="field-elements">
                {type.toLowerCase() === "rooms"
                    ? data?.getRoom.rooms.map((room) => (
                        <Fieldmembers
                            username={room?.room.Roomname}
                            url={room?.room.adminId}
                        />
                    ))
                    : null}
            </div>
        </div>
    );
};
