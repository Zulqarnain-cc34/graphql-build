import React from "react";
import "../../../Css/Components/Home/infobar.css";
interface InfobarProps { }

export const Infobar: React.FC<InfobarProps> = () => {
    return <div className="infobar">
        <div className="active">
            <h2>ACTIVE NOW</h2>
            <div className="infotab">
                <h3>It's quiet right now...</h3>
                <p>When a friend starts an activity—like playing a game or hanging out on voice—we’ll show it here!</p>
            </div>
        </div>
    </div>;
};
