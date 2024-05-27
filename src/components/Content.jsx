import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { styled } from 'styled-components';
import Comment from './Comment'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h2`
    margin: 1rem 0 0 1rem;
    font-size: 1.1rem;
`

const Text = styled.p`
    margin: 0.5rem 0 0 1rem;
    font-size: 0.8rem;
`

const CommentNum = styled.p`
    margin: auto 1rem auto 0;
    font-size: 0.8rem;
`

const Photo = styled.img`
    width: 30rem;
    height: 30rem;
    padding: 1rem;
`;

const Add = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-size: 0.8rem;
    margin: auto 0 2rem 0;
`;

const Write = styled.input`
    width: 100%;
    color: gray;
    margin: 0 0 0 1rem;
    border: none;
    cursor: text;
`;

const Button = styled.div`
    width: 2rem;
    color: blue;
    font-weight: bold;
    cursor: pointer;
    margin: 0 1rem 0 0;
`;

const Content = () => {
    const { img_id } = useParams();
    const [post, setPost] = useState([]);
    const [commentNum, setCommentNum] = useState();
    const [comment, setComment] = useState([]);
    const [newComment,setNewComment] = useState('');

    useEffect(() => {
        axios
            .get(`http://3.36.127.43:8080/imageAll`)
            .then((res) => {
                const Post = res.data.find(item => item.id === img_id);
                setPost(Post);
            })
            .catch((e) => {
                console.log(e);
            });
        }, [img_id]);

    useEffect(() => {
        axios
            .get(`http://3.36.127.43:8080/${img_id}/comments`)
            .then((res) => {
                setCommentNum(res.data.length);
                setComment(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    },[img_id]);

    const handleAdd = () => {
        if (newComment.trim() === '') return;
        axios
            .post(`http://3.36.127.43:8080/${img_id}/comments`,
                {
                    commentBody: newComment,
                })
            .then((res)=> {
                setComment([...comment,res.data]);
                setNewComment('');
                window.location.reload();
            })
            .catch((e)=> {
                console.log(e);
            });
    }

    return (
        <>
            <Wrapper>
                <TextWrapper>
                    <div>
                        <Title>{post.imageName}</Title>
                        <Text>{post.imageText}</Text>
                    </div>
                    <CommentNum>
                        댓글 {commentNum}개
                    </CommentNum>
                </TextWrapper>
                <Photo src={post.imageURL}/>
                <Add>
                    <Write
                        type="text"
                        value={newComment}
                        onChange={(e)=>setNewComment(e.target.value)}
                        placeholder='댓글 작성...'
                    / >
                    <Button onClick={handleAdd}>게시</Button>
                </Add>
                <div>
                    {comment.map((comment) => (
                        <Comment
                            key={comment.id}
                            img_id={img_id}
                            id={comment.id}
                            commentBody={comment.commentBody}
                            createdAt={comment.createdAt}
                        />
                    ))}
                </div>
            </Wrapper>
        </>
    );
};

export default Content;