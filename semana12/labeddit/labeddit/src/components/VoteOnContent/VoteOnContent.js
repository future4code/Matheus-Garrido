import React, {useContext} from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'

export default function VoteOnContent(props) {

    const {getPosts} = useContext(GlobalStateContext)

    const createVote = (type, id, direction) => {
        const body = {
            direction: direction
        }
        const header = {
            headers: { 
                Authorization: localStorage.getItem("token") 
            }
        }
        axios
        .post(`${BASE_URL}/${type}/${id}/votes`, body, header)
        .then((res) => {
            getPosts()
            props.getData()
        })
        .catch((err) => {
            console.log(err.data)
        })
    }

    const changeVote = (type, id, direction) => {
        const body = {
            direction: direction
        }
        const header = {
            headers: { 
                Authorization: localStorage.getItem("token") 
            }
        }
        axios
        .put(`${BASE_URL}/${type}/${id}/votes`, body, header)
        .then((res) => {
            getPosts()
            props.getData()
            console.log(res)

        })
        .catch((err) => {
            console.log(err)
        })
    }

    const deleteVote = (type, id) => {
        const header = {
            headers: { 
                Authorization: localStorage.getItem("token") 
            }
        }
        axios
        .delete(`${BASE_URL}/${type}/${id}/votes`, header)
        .then((res) => {
            getPosts()
            props.getData()
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const postVote = (type, id, direction, userVote) => {
        if (userVote === null) {
            createVote(type, id, direction)
        } else if (userVote !== direction) {
            changeVote(type, id, direction)
        } else if (userVote == direction) {
            deleteVote(type, id)
        }
    }

    return (
        <div>
            <button onClick={() => postVote(props.type, props.id, 1, props.userVote)}>{props.userVote == 1 ? "⬆️" : "⬆"}</button>
            <p>{props.voteSum}</p>
            <button onClick={() => postVote(props.type, props.id, -1, props.userVote)}>{props.userVote == -1 ? "⬇️" : "⬇"}</button>
        </div>
    )
}