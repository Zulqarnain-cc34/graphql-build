import {
    faBell,
    faBullhorn,
    faChalkboardTeacher,
    faComment,
    faCouch,
    faHockeyPuck,
    faSearch,
    faStream,
    faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@material-ui/core";
import React from "react";
import "../../../Css/Components/Home/sidebar.css";
import { Field } from "./Field";
interface SidebarProps { }

export const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-options">
                <div className="sidebar-options-top">
                    <FontAwesomeIcon
                        icon={faStream}
                        className="sidebar-options-icons"
                        style={{ color: "#ffffff" }}
                    />
                    <div className="sidebar-options-features">
                        <FontAwesomeIcon
                            icon={faWaveSquare}
                            className="sidebar-options-icons"
                        />
                        <FontAwesomeIcon
                            icon={faBullhorn}
                            className="sidebar-options-icons"
                        />
                        <FontAwesomeIcon
                            icon={faCouch}
                            className="sidebar-options-icons"
                        />
                        <FontAwesomeIcon
                            icon={faHockeyPuck}
                            className="sidebar-options-icons"
                        />
                        <FontAwesomeIcon
                            icon={faChalkboardTeacher}
                            className="sidebar-options-icons"
                        />
                        <FontAwesomeIcon
                            icon={faComment}
                            className="sidebar-options-icons"
                        />
                    </div>
                </div>

                <div className="sidebar-options-user">
                    <FontAwesomeIcon
                        icon={faBell}
                        className="sidebar-options-icons"
                    />
                    <Avatar className="sidebar-options-user-avatar" />
                </div>
            </div>
            <div className="sidebar-groups">
                <div className="sidebar-groups-top">
                    <div className="sidebar-groups-searchbar">
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="sidebar-groups-searchicon"
                        />
                        <input type="text" placeholder="Search for friends" />
                    </div>
                </div>

                <div className="sidebar-groups-bottom">
                    <hr className="sidebar-groups-hr" />
                    <Field fieldname="Direct Messages" type="Rooms" />
                    <Field fieldname="Groups" type="Friends" />
                </div>
            </div>
        </div>
    );
};
