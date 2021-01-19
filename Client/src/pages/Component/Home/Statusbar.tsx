import React from "react";
import { useOnlineUsersSubscription } from "../../../generated/graphql";
import "../../../styles/Components/Home/statusbar.css";
import { Onlineusers } from "./Onlineusers";
interface StatusbarProps {}

export const Statusbar: React.FC<StatusbarProps> = () => {
    const [{ data }] = useOnlineUsersSubscription({
        variables: { status: "online" },
    });
    console.log(data);
    return (
        <div className="infobar">
            {/*{fetching ? (
                <div className="active">
                    <h2>ACTIVE NOW</h2>
                    <div className="infotab">
                        <h3>It's quiet right now...</h3>
                        <p>
                            When a friend starts an activity—like playing a game
                            or hanging out on voice—we’ll show it here!
                        </p>
                    </div>
                </div>
            ) : (*/}
            {data?.onlineUsers &&
                data?.onlineUsers.map((user) => (
                    <Onlineusers
                        username={user.user.username}
                        profilepic={user.user.profilepic}
                        status={"online"}
                    />
                ))}
        </div>
    );
};
