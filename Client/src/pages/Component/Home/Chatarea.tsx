import React, { useEffect, useState } from "react";
import "../../../styles/Components/Home/chatarea.css";
import {
    useCreatepostMutation,
    useGetNewPostSubscription,
    //useGetpostsQuery,
} from "../../../generated/graphql";
import { Message } from "./Message";
import { Icon } from "./Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
interface ChatareaProps {
    roomId: string;
}

export const Chatarea: React.FC<ChatareaProps> = ({ roomId }) => {
    //const [{ data }] = useGetpostsQuery({
    //    variables: { roomId: parseInt(roomId), limit: 30 },
    //});
    const [{ data }] = useGetNewPostSubscription({
        variables: { roomId: parseInt(roomId) },
    });
    console.log(data);
    //console.log(room);
    //useEffect(() => {

    //}, [])

    //console.log(data.posts.posts);
    const [post, setPost] = useState<string>("");
    const [, createpost] = useCreatepostMutation();
    const handlePosts = async (e) => {
        e.preventDefault();
        await createpost({ message: post, roomId: parseInt(roomId) });
    };
    useEffect(() => { }, []);

    return (
        <div className="chatarea">
            <div className="chattingarea">
                {/*{data?.posts.posts.map((post) => (
                    <Message
                        username={post["creator"].username}
                        createdAt={post.createdAt}
                        message={post.message}
                    />
                ))}*/}
                {data?.Postadded ? (
                    <Message
                        username={data.Postadded.post.creator.username}
                        createdAt={data.Postadded.post.createdAt}
                        message={data.Postadded.post.message}
                    />
                ) : null}
            </div>
            <div className="message-post">
                <div className="message-message">
                    <form action="" onSubmit={handlePosts}>
                        <Icon type="fonticon" icon={faSearch} />
                        <input
                            type="text"
                            placeholder="Say Hello to your Friends..."
                            onChange={(e) => setPost(e.target.value)}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};
