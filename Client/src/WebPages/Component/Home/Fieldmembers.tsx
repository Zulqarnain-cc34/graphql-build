import { Avatar } from "@material-ui/core";
import React from "react";
import "../../../Css/Components/Home/fieldmembers.css";
interface FieldmembersProps {
    username: string;
    url: string;
}

export const Fieldmembers: React.FC<FieldmembersProps> = ({
    url,
    username,
}) => {
    return (
        <div className="fieldmembers">
            <Avatar src={url} className="fieldmembers-avatar" />
            <h2>{username}</h2>
        </div>
    );
};
