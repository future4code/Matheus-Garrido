import React, { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { useParams } from 'react-router-dom'
import { datePost } from '../../constants/datePost'
import ComentForm from '../CommentForm/CommentForm'
import PostComments from '../PostComments/PostComments'
import useRequestData from '../../hooks/useRequestData'

export default function PostDetail() {
    const params = useParams();
    const { posts } = useContext(GlobalStateContext)

    const {data, getData} = useRequestData([], `/posts/${params.id}/comments`, { Authorization: localStorage.getItem("token") })

    const renderPost = posts.map((post) => {
        if (post.id === params.id) {
            return (
                <div>
                    <p>{post.username}</p>
                    <p>{datePost(post.createdAt)}</p>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <p>{post.voteSum}</p>
                    <p>{post.commentCount === null ? "0 comentários" : `${post.commentCount} comentários`}</p>
                </div>
            )
        }
    })

    return (
        <div>
            {renderPost}
            <hr/>
            <ComentForm id={params.id} getData={getData}/>
            <hr/>
            <PostComments data={data} getData={getData} id={params.id}/>
        </div>
    )
}