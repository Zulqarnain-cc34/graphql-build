import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Fieldmembers } from "./Fieldmembers";
import "../Css/field.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
interface FieldProps {
    fieldname: string;
}

export const Field: React.FC<FieldProps> = ({ fieldname }) => {
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
                <Fieldmembers
                    username="powerranger16918"
                    url="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
                />
                <Fieldmembers
                    username="powerranger16918"
                    url="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
                />
                <Fieldmembers
                    username="powerranger16918"
                    url="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
                />
                <Fieldmembers
                    username="powerranger16918"
                    url="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014_960_720.jpg"
                />
            </div>
        </div>
    );
};
