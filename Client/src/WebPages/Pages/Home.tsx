import React from "react";
import "../Css/home.css";
import { Chat } from "../Component/HomePageComponents/Chat";
import { Infobar } from "../Component/HomePageComponents/Infobar";
import { Sidebar } from "../Component/HomePageComponents/Sidebar";

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
