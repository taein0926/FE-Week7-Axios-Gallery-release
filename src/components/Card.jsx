import React from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Margin from "./Margin"

const Wrapper = styled.div`
    padding: 0.3rem;
    width: 12.5rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

const Photo= styled.img`
    width: 12.3rem;
    height: 12.3rem;
`;

const TextWrapper = styled.div`
    width: 100%;
`

const Name = styled.div`
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

`

export default function Card({ id, imageURL, imageName, imageText }) {
    const navigate = useNavigate();

    return (
        <Wrapper id={id} onClick={() => navigate(`/post/${id}`)}>
            <Photo src={imageURL} />
            <Margin height={5}/>
            <TextWrapper>
                <Name>{imageName}</Name>
                <p style={{
                    margin: '0',
                    fontSize: '0.8rem',
                    color: 'gray',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                }}>{imageText}</p>
            </TextWrapper>
        </Wrapper>
    );
}