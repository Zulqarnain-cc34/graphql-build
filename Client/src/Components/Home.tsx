import React from "react";
import "../Css/home.css";
import { Chat } from "./Chat";
import { Infobar } from "./Infobar";
import { Sidebar } from "./Sidebar";

interface HomeProps {}

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
