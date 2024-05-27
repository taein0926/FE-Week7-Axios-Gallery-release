import React, { useState } from 'react';
import Header from '../components/Header';
import axios from "axios";
import { useEffect } from "react";
import Card from "../components/Card";
import { styled } from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0.8rem;
`;

const Main = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios
            .get(`http://3.36.127.43:8080/imageAll`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <>
            <Header />
            <Container>
                {post.map((post) => (
                        <Card
                            key={post.id}
                            id={post.id}
                            imageURL={post.imageURL}
                            imageName={post.imageName}
                            imageText={post.imageText}
                        />
                    ))}
            </Container>
        </>
    );
};

export default Main;