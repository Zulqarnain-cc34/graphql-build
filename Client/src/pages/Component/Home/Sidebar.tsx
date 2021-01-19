import React from "react";
import {
    faBullhorn,
    faChalkboardTeacher,
    faComment,
    faCouch,
    faHeadphones,
    faHockeyPuck,
    faCog,
    faSearch,
    faStream,
    faWaveSquare,
    faMicrophoneAltSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@material-ui/core";
import "../../../styles/Components/Home/sidebar.css";
import Field from "./Field";
import Slack from "../../../icons/slack.svg";
import Bell from "../../../icons/bell-stationary.svg";
import { Icon } from "./Icon";
import { useMeQuery } from "../../../generated/graphql";
import { Skeleton } from "@material-ui/lab";
import { Imageuploader } from "./Imageuploader";
import { useStateValue } from "../../../context/stateProvider";
import { useRef } from "react";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
    const [{ data, fetching }] = useMeQuery();
    const imageuploadRef = useRef<HTMLDivElement>();
    const { state } = useStateValue();
    const handleUpload = (e) => {
        e.preventDefault();
        state?.ref?.current.classList.add("upload-open");
        imageuploadRef?.current.classList.add("uploader-blur");
    };
    const handleUploadBlur = (e) => {
        e.preventDefault();
        if (imageuploadRef?.current.classList.contains("uploader-blur")) {
            imageuploadRef?.current.classList.remove("uploader-blur");
        }
        if (state?.ref?.current.classList.contains("upload-open")) {
            state?.ref?.current.classList.remove("upload-open");
        }
    };

    //async function uploadimages() {
    //    await uploadimage({ image: image });
    //}
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
                    {fetching ? (
                        <Skeleton
                            variant="circle"
                            style={{ width: 40, height: 40 }}
                        />
                    ) : data.me.profilepic ? (
                        <Avatar
                            className="sidebar-options-user-avatar"
                            src={data?.me.profilepic}
                            onClick={handleUpload}
                        />
                    ) : (
                        <Avatar
                            className="sidebar-options-user-avatar"
                            onClick={handleUpload}
                        />
                    )}
                    <div
                        className="imageupload"
                        ref={imageuploadRef}
                        onClick={handleUploadBlur}
                    >
                        <Imageuploader
                            style={{
                                position: "absolute",
                                top: "17%",
                                left: "23%",
                            }}
                        />
                    </div>
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
                        {fetching ? (
                            <Skeleton
                                variant="rect"
                                style={{ width: 85, height: 35 }}
                            />
                        ) : parseInt(data?.me?.id) !== 0 ? (
                            <>
                                <h2>{data?.me?.username}</h2>
                                <p>#3985</p>
                            </>
                        ) : (
                            <>
                                <h2>username</h2>
                                <p>#3985</p>
                            </>
                        )}
                    </div>
                    <div className="sidebar-groups-user-icons">
                        <Icon type="fonticon" icon={faMicrophoneAltSlash} />
                        <Icon type="fonticon" icon={faHeadphones} />
                        <Icon type="fonticon" icon={faCog} />
                    </div>
                </div>
            </div>
        </div>
    );
};
