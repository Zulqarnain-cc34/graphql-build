import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../Css/field.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useGetroomsQuery } from "../../../generated/graphql";
import { Fieldmembers } from "./Fieldmembers";
//import { useUser } from "../context";
interface FieldProps {
    fieldname: string;
    type: string;
}

export const Field: React.FC<FieldProps> = ({ fieldname, type }) => {
    const [rooms] = useGetroomsQuery({ variables: { limit: 4 } });
    //const { user } = useUser();
    console.log(rooms.data);
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
                    ? rooms?.data?.getRooms.rooms.map((room) => (
                        <Fieldmembers
                            username={room?.Roomname}
                            url={room?.adminId}
                        />
                    ))
                    : null}
            </div>
        </div>
    );
};
