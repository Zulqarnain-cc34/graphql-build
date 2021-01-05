import {
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
import "../../../styles/Components/Home/sidebar.css";
import { Field } from "./Field";
import Slack from "../../../icons/slack.svg";
import Mic from "../../../icons/mute-microphone.svg";
import Bell from "../../../icons/bell-stationary.svg";
import Headphones from "../../../icons/headphones-snow.svg";
import Gear from "../../../icons/settings.svg";
import { Icon } from "./Icon";
import { store } from "../../../context/Store";

interface SidebarProps { }

export const Sidebar: React.FC<SidebarProps> = () => {
    console.log(store.getState());

    return (
        <div className="sidebar">
            <div className="sidebar-options">
                <div className="sidebar-options-top">
                    <FontAwesomeIcon
                        icon={faStream}
                        className="sidebar-options-icons"
                        style={{ color: "#ffffff" }}
                    />
                </div>

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

                <div className="sidebar-options-user">
                    <Icon type="img" src={Bell} />
                    <Avatar className="sidebar-options-user-avatar" />
                </div>
            </div>
            <div className="sidebar-groups">
                <div className="sidebar-groups-top">
                    <div className="sidebar-groups-searchbar">
                        <Icon type="fonticon" icon={faSearch} style={{ margin: 0, padding: "3px" }} />
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
                        {/*{user ? <h2>user?.username</h2> : <h2>bobrosen</h2>}*/}
                        <p>#3985</p>
                    </div>
                    <div className="sidebar-groups-user-icons">
                        {/*<div className="sidebar-groups-user-icondiv">
                            <img
                                src={Mic}
                                alt=""
                                className="sidebar-groups-user-icon"
                            />
                        </div>
                        <div className="sidebar-groups-user-icondiv">
                            <img
                                src={Headphones}
                                alt=""
                                className="sidebar-groups-user-icon"
                            />
                        </div>
                        <div className="sidebar-groups-user-icondiv">
                            <img
                                src={Gear}
                                alt=""
                                className="sidebar-groups-user-icon"
                            />
                        </div>*/}
                        <Icon type="img" src={Mic} />
                        <Icon type="img" src={Headphones} />
                        <Icon type="img" src={Gear} />
                    </div>
                </div>
            </div>
        </div>
    );
};
