import React from "react";
import { styled } from 'styled-components';
import axios from "axios";


const Wrapper = styled.div`
    height: 2rem;
    display: flex;
    flex-direction: row;
`;

const Anonymous = styled.div`
    width: 4rem;
    font-weight: bold;
    text-align: right;
    margin: auto 1rem auto 0;
`;

const Comm = styled.div`
    width: 100%;
    margin: auto 0 auto 0;
    font-size: 0.8rem;
`;

const Delete = styled.div`
    width: 4rem;
    text-align: center;
    font-size: 0.8rem;
    color: gray;
    margin: auto 1rem auto 0;
    cursor: pointer;
`;

export default function Comment({ img_id, id, commentBody, createdAt }) {
    const handleDelete = () => {
        axios
        .delete(`http://3.36.127.43:8080/${img_id}/comments/${id}`)
        .then((res) => {
            window.location.reload();
        })
        .catch((e) => {
            console.log(e);
        });
    }

    return (
        <Wrapper id={id}>
            <Anonymous>익명</Anonymous>
            <Comm>{commentBody}</Comm>
            <Delete onClick={handleDelete}>삭제</Delete>
        </Wrapper>
    );
}