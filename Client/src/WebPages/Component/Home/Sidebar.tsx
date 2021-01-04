import {
    faBell,
    faBullhorn,
    faChalkboardTeacher,
    faCog,
    faComment,
    faCouch,
    faHeadphonesAlt,
    faHockeyPuck,
    faSearch,
    faStream,
    faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@material-ui/core";
import React from "react";
import { useUser } from "../../../context";
import "../../../Css/Components/Home/sidebar.css";
import { Field } from "./Field";
import Slack from "../../../img/slack.svg";
import Mic from "../../../img/mute-microphone.svg";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
    const { user } = useUser();
    console.log(user);
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
                <div className="sidebar-groups-user">
                    <img
                        src={Slack}
                        alt=""
                        className="sidebar-groups-user-slack"
                    />
                    <div className="sidebar-groups-user-content">
                        <h2>{user?.username}</h2>
                        <p>#3985</p>
                    </div>
                    <div className="sidebar-groups-user-icons">
                        <div className="sidebar-groups-user-icondiv">
                            <img
                                src={Mic}
                                alt=""
                                className="sidebar-groups-user-icon"
                            />
                        </div>
                        <div className="sidebar-groups-user-icondiv">
                            <FontAwesomeIcon
                                icon={faHeadphonesAlt}
                                className="sidebar-groups-user-icon"
                            />
                        </div>
                        <div className="sidebar-groups-user-icondiv">
                            <FontAwesomeIcon
                                icon={faCog}
                                className="sidebar-groups-user-icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
