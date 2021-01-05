import React from "react";
import "../../../styles/Components/Home/chatarea.css";
import { useGetpostsQuery } from "../../../generated/graphql";
import { Message } from "./Message";

interface ChatareaProps {
    roomId: string;
}

export const Chatarea: React.FC<ChatareaProps> = ({ roomId }) => {
    const [{ data }] = useGetpostsQuery({
        variables: { roomId: parseInt(roomId), limit: 10 },
    });
    console.log(data);
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
        </div>
    );
};
