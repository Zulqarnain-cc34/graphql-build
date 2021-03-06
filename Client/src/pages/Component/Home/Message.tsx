import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "../../../styles/Components/Home/message.css";
interface MessageProps {
    username: string;
    message: string;
    createdAt: string;
}

export const Message: React.FC<MessageProps> = ({
    username,
    createdAt,
    message,
}) => {
    const [seed, setSeed] = useState<number>(0);
    const imgRef = useRef<HTMLImageElement>();

    //useEffect(() => {
    //    if (imgRef.current?.complete) {
    //        onLoad();
    //    }
    //}, []);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [setSeed]);
    return (
        <div className="message">
            <Avatar
                ref={imgRef}
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                className="message-avatar"
            />

            <div className="message-content">
                <h3>{username}</h3>
                <p>{message}</p>
                <div className="message-content-dateTime">
                    {<h4>{createdAt.split("T")[1]}</h4>}
                </div>
            </div>
        </div>
    );
};

// (
//                <Skeleton
//                    variant="rect"
//                    style={{ width: "100%", height: 50, borderRadius: 4 }}
//                />
//            )
