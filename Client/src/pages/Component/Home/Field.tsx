import React, { useState } from "react";
import "../../../styles/Components/Home/field.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useGetroomsQuery } from "../../../generated/graphql";
import { Fieldmembers } from "./Fieldmembers";
import { Icon } from "./Icon";

interface FieldProps {
    fieldname: string;
    type: string;
}

const Field: React.FC<FieldProps> = ({ fieldname, type }) => {
    const [{ data }] = useGetroomsQuery({ variables: { limit: 10 } });
    const [selected, setSelected] = useState<boolean>(false);
    return (
        <div className="field">
            <div className="field-info">
                <h2>{fieldname}</h2>
                <Icon
                    type="fonticon"
                    icon={faChevronDown}
                    onClick={() => setSelected(!selected)}
                    style={{ width: "30px", height: "25px" }}
                />
            </div>
            <div className={selected ? "selected" : "field-elements"}>
                {type.toLowerCase() === "rooms"
                    ? data?.getRoom.rooms.map((room) => (
                          <Fieldmembers
                              username={room?.room.Roomname}
                              room={room.room}
                              key={room.room.id}
                          />
                      ))
                    : null}
            </div>
        </div>
    );
};
export default React.memo(Field);
