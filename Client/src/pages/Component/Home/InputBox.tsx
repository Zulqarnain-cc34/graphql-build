import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "./Icon";
import React, { useState } from "react";
import { useCreatepostMutation } from "../../../generated/graphql";
import "../../../styles/Components/Home/inputbox.css";
interface InputBoxProps {
    roomId: string;
}

export const InputBox: React.FC<InputBoxProps> = ({ roomId }) => {
    const [post, setPost] = useState<string>("");
    const [, createpost] = useCreatepostMutation();
    const handlePosts = async (e) => {
        e.preventDefault();
        await createpost({ message: post, roomId: parseInt(roomId) });
        setPost("");
    };

    return (
        <div className="message-post">
            <div className="message-message">
                <form action="" onSubmit={handlePosts}>
                    <Icon type="fonticon" icon={faSearch} />
                    <input
                        type="text"
                        placeholder="Say Hello to your Friends..."
                        onChange={(e) => setPost(e.target.value)}
                        value={post}
                    />
                </form>
            </div>
        </div>
    );
};
