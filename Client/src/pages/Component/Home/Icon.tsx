import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../styles/Components/Home/icon.css";
interface IconProps {
        type: string;
        src?: string;
        icon?: IconDefinition;
        style?: React.CSSProperties;
        onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Icon: React.FC<IconProps> = ({
        type,
        src,
        icon,
        style,
        onClick,
}) => {
        return (
                <div className="icon">
                        {type === "fonticon" ? (
                                <div className="font-icon" onClick={onClick} style={style}>
                                        <FontAwesomeIcon icon={icon} className="font-icon-icon" />
                                </div>
                        ) : (
                                        <div className="icon-img" onClick={onClick} style={style}>
                                                <img src={src} alt="" className="icon-img-img" />
                                        </div>
                                )}
                </div>
        );
};
