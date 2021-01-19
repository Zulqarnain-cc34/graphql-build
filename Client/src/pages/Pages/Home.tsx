import React from "react";
import "../../styles/pages/home.css";
import { Chat } from "../Component/Home/Chat";
import { Statusbar } from "../Component/Home/Statusbar";
import { Sidebar } from "../Component/Home/Sidebar";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
    return (
        <div className="home">
            <Sidebar />
            <Chat />
            <Statusbar />
        </div>
    );
};

export default Home;
