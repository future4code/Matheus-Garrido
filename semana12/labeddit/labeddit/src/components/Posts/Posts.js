import React, {useContext, useEffect} from 'react'
import { useHistory } from "react-router-dom"
import { GlobalStateContext } from '../../global/GlobalStateContext'
import VoteOnContent from '../VoteOnContent/VoteOnContent'
import {goToPostDetail} from '../../routes/coordinator'
import { datePost } from '../../constants/datePost'

export default function Posts() {

    const history = useHistory()

    const {posts, getPosts} = useContext(GlobalStateContext)
    console.log(posts)
    /* useEffect(() => {
        getPosts()
    })
    */

    const renderPost = posts && posts.map((post) => {
        return (
            <div>
                <p>{post.username}</p>
                <p>{datePost(post.createdAt)}</p>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <VoteOnContent type={"posts"} id={post.id} userVote={post.userVote} voteSum={post.voteSum} />
                <button onClick={() => goToPostDetail(history, post.id)}>{post.commentCount === null ? "0 comentários" : `${post.commentCount} comentários`}</button>
            </div>
        )
    })

    return (
        <div>
            {renderPost}
        </div>
    )
}