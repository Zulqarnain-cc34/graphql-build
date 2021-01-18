import React, { useState } from "react";
import "../../../styles/Components/Home/chatarea.css";
import {
    usePostAddedSubscription,
    useGetpostsQuery,
    RegularPostsFragment,
} from "../../../generated/graphql";
import { Message } from "./Message";
import { InputBox } from "./InputBox";
import { useEffect } from "react";
interface ChatareaProps {
    roomId: string;
}
const Chatarea: React.FC<ChatareaProps> = ({ roomId }) => {
    //const [loadedfiles, setLoadedfiles] = useState<any>([]);
    const [{ data }] = useGetpostsQuery({
        variables: { roomId: parseInt(roomId), limit: 40 },
    });
    const [newPost] = usePostAddedSubscription({
        variables: { roomId: parseInt(roomId) },
    });
    const [newPosts, setNewPosts] = useState<RegularPostsFragment[]>([]);

    useEffect(() => {
        if (newPost.data !== undefined) {
            setNewPosts([newPost.data.Postadded.post, ...newPosts]);
        }
    }, [newPost]);
    //console.log(roomId);
    //console.log(newPosts);
    //console.log(posts);
    //useEffect(() => {

    //    async function getNewPost() {
    //        const message = await posts({
    //            variables: { roomId: parseInt(roomId) },
    //        });
    //        console.log(message);
    //        //const unsubscribe=await message.unsubscribe();
    //    }
    //    getNewPost();
    //    return () => {

    //    }
    //}, [posts, roomId])
    //const makemessage = useCallback(() => {
    //    if (posts.data?.Postadded?.post) {
    //        return (
    //            <Message
    //                username={posts.data.Postadded.post.creator.username}
    //                createdAt={posts.data.Postadded.post.createdAt}
    //                message={posts.data.Postadded.post.message}
    //            />
    //        );
    //    }
    //}, [posts]);

    //useEffect(() => {
    //    makemessage();
    //}, [makemessage, posts?.data]);
    //console.log(posts.data);
    return (
        <div className="chatarea">
            <div className="chattingarea">
                {data?.posts.posts
                    .slice(0)
                    .reverse()
                    .map((post) => (
                        <Message
                            username={post["creator"].username}
                            createdAt={post.createdAt}
                            message={post.message}
                            key={post.id}
                        />
                    ))}
                {newPosts
                    .slice(0)
                    .reverse()
                    .map((post) => (
                        <Message
                            username={post["creator"].username}
                            createdAt={post.createdAt}
                            message={post.message}
                            key={post.id}
                        />
                    ))}
                {console.count("count")}
            </div>
            <InputBox roomId={roomId} />
        </div>
    );
};

Chatarea.whyDidYouRender = true;
export default React.memo(Chatarea);
