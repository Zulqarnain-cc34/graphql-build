import styled from "styled-components";

export const RoomComponent = styled.button`
    & {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid rgb(185, 185, 185);
        cursor: pointer;
        background-color: #2f3136;
        color: rgb(185, 185, 185);
        margin-bottom: 20px;
        transition: 0.2s all ease-in-out;
    }
    .font-icon-icon {
        width: 20px !important;
        height: 20px !important;
        color: rgb(185, 185, 185);
    }
    &:hover .font-icon-icon,
    .icon-img-img {
        color: #c0c0c0 !important;
    }
    &:hover {
        border: 1px solid rgb(102, 104, 104) !important;
    }
`;
