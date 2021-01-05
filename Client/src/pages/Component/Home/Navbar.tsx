import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicroblog } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Avatar, IconButton } from "@material-ui/core";
import { useLogoutMutation, useMeQuery } from "../../../generated/graphql";
import "../../../styles/Components/Home/navbar.css";
import { Link } from "react-router-dom";

interface NavbarProps { }

export const Navbar: React.FC<NavbarProps> = () => {
    const [{ data, fetching }] = useMeQuery();
    const [, logout] = useLogoutMutation();
    return (
        <div className="navbar">
            <div className="navbar-left">
                <FontAwesomeIcon
                    icon={faMicroblog}
                    className="navbar-left-logo "
                />
                <h2>Rupper</h2>
            </div>
            <div className="navbar-right">
                <div className="navbar-input-field">
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="navbar-search-icon"
                    />
                    <input type="text" placeholder="Search for friends" />
                </div>
                <div className="navbar-right-options">
                    <div className="navbar-right-options-icons">
                        <IconButton>
                            <FontAwesomeIcon
                                icon={faBell}
                                className="navbar-options-icon"
                            />
                        </IconButton>
                    </div>

                    <div className="navbar-right-options-icons">
                        <IconButton>
                            <FontAwesomeIcon
                                icon={faCog}
                                className="navbar-options-icon"
                            />
                        </IconButton>
                    </div>

                    <div className="navbar-right-options-icons">
                        <IconButton>
                            <FontAwesomeIcon
                                icon={faComments}
                                className="navbar-options-icon"
                            />
                        </IconButton>
                    </div>
                    <div className="navbar-right-options-icons">
                        <IconButton>
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                className="navbar-options-icon"
                            />
                        </IconButton>
                    </div>
                    <div className="navbar-right-options-icons">
                        <Avatar src="https://lh6.googleusercontent.com/-NhzcbJ1OWow/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckJOYb6QIi3ZR4CGgD2NmSBmKoQ9A/photo.jpg" />
                    </div>
                    <div className="navbar-right-user">
                        {fetching ? null : !data?.me ? (
                            <Link to="/login" className="navbar-right-btn">
                                Sign In
                            </Link>
                        ) : (
                                <>
                                    <p>{data?.me.username}</p>
                                    <button onClick={() => logout()}>logout</button>
                                </>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};
