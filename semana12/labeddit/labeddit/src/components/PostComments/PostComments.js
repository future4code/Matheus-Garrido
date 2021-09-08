import React, {useContext} from 'react'
import { useHistory } from "react-router-dom"
import { GlobalStateContext } from '../../global/GlobalStateContext'
import VoteOnContent from '../VoteOnContent/VoteOnContent'
import {goToPostDetail} from '../../routes/coordinator'
import { datePost } from '../../constants/datePost'
import useRequestData from '../../hooks/useRequestData'

export default function PostComments(props) {

    

    const renderComment = props.data && props.data.map((comment) => {
        return (
            <div>
                <p>{comment.username}</p>
                <p>{datePost(comment.createdAt)}</p>
                <p>{comment.body}</p>
                <VoteOnContent getData={props.getData} type={"comments"} id={comment.id} userVote={comment.userVote} voteSum={comment.voteSum} />
                <hr/>
            </div>
        )
    })

    return (
        <div>
            {renderComment}
        </div>
    )
}