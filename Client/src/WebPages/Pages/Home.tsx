import React from "react";
import "../../Css/pages/home.css";
import { Chat } from "../Component/Home/Chat";
import { Infobar } from "../Component/Home/Infobar";
import { Sidebar } from "../Component/Home/Sidebar";

interface HomeProps { }

export const Home: React.FC<HomeProps> = () => {
    return (
        <div className="home">
            <Sidebar />
            <Chat />
            <Infobar />
        </div>
    );
};

export default Home;
