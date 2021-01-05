import {
    faCog,
    faEllipsisV,
    faInfoCircle,
    faPlus,
    faThumbtack,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "../../../styles/Components/Home/chatheader.css";
import Star from "../../../icons/star.svg";
import { Icon } from "./Icon";
interface ChatheaderProps {
    roomId: string;
}

export const Chatheader: React.FC<ChatheaderProps> = ({ roomId }) => {
    console.log(roomId);

    return (
        <div className="chatheader">
            <div className="header-left">
                <h1># Roomname</h1>
                <div className="header-left-info">
                    <p>6 members</p>
                    <div className="header-left-info-Add">
                        <Icon type="fonticon" icon={faPlus} />
                        <p>Add member</p>
                    </div>
                </div>
            </div>
            <div className="header-right">
                {/*<div className="header-right-icons">
                    <FontAwesomeIcon
                        icon={faThumbtack}
                        className="header-right-icon"
                    />
                </div>
                <div className="header-right-icons">
                    <FontAwesomeIcon
                        icon={faInfoCircle}
                        className="header-right-icon"
                        id="warning"
                    />
                </div>

                <div className="header-right-icons">
                    <FontAwesomeIcon
                        icon={faCog}
                        className="header-right-icon"
                    />
                </div>
                <div className="header-right-icons">
                    <img src={Star} alt="" className="header-right-icon" />
                </div>
                <div className="header-right-icons">
                    <FontAwesomeIcon
                        icon={faEllipsisV}
                        className="header-right-icon"
                    />
                </div>*/}
                <Icon type="fonticon" icon={faEllipsisV} />
                <Icon type="fonticon" icon={faCog} />
                <Icon type="img" src={Star} />
                <Icon type="fonticon" icon={faThumbtack} />
                <Icon type="fonticon" icon={faInfoCircle} />
            </div>
        </div>
    );
};
