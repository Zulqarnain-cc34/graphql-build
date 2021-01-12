import React from "react";
import "../../styles/pages/home.css";
import { Chat } from "../Component/Home/Chat";
import { Infobar } from "../Component/Home/Infobar";
import { Sidebar } from "../Component/Home/Sidebar";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
    return (
        <div className="home">
            {/*<div>
                Icons made by{" "}
                <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="Freepik"
                >
                    Freepik
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                </a>
            </div>*/}

            <Sidebar />
            <Chat />
            <Infobar />
        </div>
    );
};

export default Home;
