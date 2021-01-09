import React from "react";
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
import "../../../styles/Components/Home/sidebar.css";
import { Field } from "./Field";
import Slack from "../../../icons/slack.svg";
import Mic from "../../../icons/mute-microphone.svg";
import Bell from "../../../icons/bell-stationary.svg";
import Headphones from "../../../icons/headphones-snow.svg";
import Gear from "../../../icons/settings.svg";
import styled from "styled-components";
import { Icon } from "./Icon";
import { useStateValue } from "../../../context/stateProvider";

const RoomComponent = styled.button`
    & {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid rgb(185, 185, 185);
        cursor: pointer;
        background-color: #2f3136;
        color: rgb(185, 185, 185);
        margin-bottom: 20px;
        transition: 0.2s all ease-in-out;
    }
    .font-icon-icon {
        width: 20px !important;
        height: 20px !important;
        color: rgb(185, 185, 185);
    }
    &:hover .font-icon-icon,
    .icon-img-img {
        color: #c0c0c0 !important;
    }
    &:hover {
        border: 1px solid rgb(102, 104, 104) !important;
    }
`;

interface SidebarProps { }

export const Sidebar: React.FC<SidebarProps> = () => {
    const { state } = useStateValue();
    console.log(RoomComponent);
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
                        <Icon
                            type="fonticon"
                            icon={faSearch}
                            style={{ margin: 0, padding: "3px" }}
                        />
                        <input
                            type="text"
                            placeholder="Search for friends"
                        />
                    </div>
                </div>
                <div className="sidebar-groups-bottom">
                    {/*<div className="createroom">
                    <RoomComponent>
                        <Icon type="fonticon" icon={faPlus} />
                    </RoomComponent>
                </div>*/}
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
                        {state.user.id !== 0 ? (
                            <h2>{state?.user?.username}</h2>
                        ) : (
                                <h2>username</h2>
                            )}
                        <p>#3985</p>
                    </div>
                    <div className="sidebar-groups-user-icons">
                        <Icon type="img" src={Mic} />
                        <Icon type="img" src={Headphones} />
                        <Icon type="img" src={Gear} />
                    </div>
                </div>
            </div>
        </div>
    );
};
