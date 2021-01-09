import React from "react";
import "../../../styles/Components/Home/chatarea.css";
import { useGetpostsQuery } from "../../../generated/graphql";
import { Message } from "./Message";
import { Icon } from "./Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
interface ChatareaProps {
    roomId: string;
}

export const Chatarea: React.FC<ChatareaProps> = ({ roomId }) => {
    const [{ data }] = useGetpostsQuery({
        variables: { roomId: parseInt(roomId), limit: 10 },
    });

    return (
        <div className="chatarea">
            <div className="chattingarea">
                {data?.posts.posts.map((post) => (
                    <Message
                        username={post["creator"].username}
                        createdAt={post.createdAt}
                        message={post.message}
                    />
                ))}
            </div>
            <div className="message-post">
                <div className="message-message">
                    <Icon type="fonticon" icon={faSearch} />
                    <input type="text" />
                </div>
            </div>
        </div>
    );
};
