import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
    faCog,
    faEllipsisV,
    faInfoCircle,
    faPlus,
    faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../Css//Components/Home/chatheader.css";
interface ChatheaderProps { }

export const Chatheader: React.FC<ChatheaderProps> = () => {
    return (
        <div className="chatheader">
            <div className="header-left">
                <h1># Roomname</h1>
                <div className="header-left-info">
                    <p>6 members</p>
                    <div className="header-left-info-Add">
                        <FontAwesomeIcon
                            icon={faPlus}
                            className="header-left-info-Addicon"
                        />
                        <p>Add member</p>
                    </div>
                </div>
            </div>
            <div className="header-right">
                <FontAwesomeIcon
                    icon={faThumbtack}
                    className="header-right-icons"
                />
                <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="header-right-icons"
                />

                <FontAwesomeIcon icon={faCog} className="header-right-icons" />
                <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "golden" }}
                    className="header-right-icons"
                />
                <FontAwesomeIcon
                    icon={faEllipsisV}
                    className="header-right-icons"
                />
            </div>
        </div>
    );
};
