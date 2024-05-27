import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import profile_img from "../assets/profile_lion.png"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.4rem 0 0 0;
`

const Photo = styled.img`
    width: 6rem;
    height: 6rem;
`;

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
`

const PostNum = styled.div`
    font-weight: bold;
    margin: 0.5rem 0 0.5rem 1rem;
`

const Header = () => {
    const [imgNum, setImgNum] = useState();

    axios
        .get(`http://3.36.127.43:8080/imageSize`)
        .then((res) => {
            setImgNum(res.data);
        })
        .catch((e) => {
            console.log(e);
        });

    return (
        <>
            <Wrapper>
                <Photo src={profile_img} alt="profile"/>
                <TextWrap>
                    <h2 style={{margin: '0.5rem 0 0 1rem'}}>likelion_12th_frontend</h2>
                    <p style={{margin: '0.5rem 0 0.5rem 1rem'}}>멋쟁이사자처럼 12기 화이팅!! 어른 사자로 폭풍성장중...🦁</p>
                    <PostNum>게시물 {imgNum}개</PostNum>
                </TextWrap>
            </Wrapper>
        </>
    );
};

export default Header;