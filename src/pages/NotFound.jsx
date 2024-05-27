import React from "react";
import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom";
import lion from "../assets/yawning_lion.jpeg"


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 5rem;
`;

const Title = styled.h2`
    margin: 0.5rem;
    font-size: 1.5rem;
`

const Photo = styled.img`
    width: auto;
    height: 30rem;
`;

const Text = styled.p`
    margin: 1rem;
    font-size: 1rem;
    font-weight: bold;
`

const Button = styled.button`
    width: 9rem;
    height: 2rem;
    background-color: skyblue;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
`;

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <> 
            <Wrapper>
                <Title>멋쟁이 사자가 당신을 기다리고 있습니다</Title>
                <Photo src={lion} />
                <Text>하품...</Text>
                <Button onClick={() => navigate(-1)}>뒤돌아서 도망가기!</Button>
            </Wrapper>
        </>
    );
};

export default NotFound;