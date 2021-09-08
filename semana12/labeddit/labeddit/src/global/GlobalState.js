import React, {useState, useEffect} from 'react'
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from '../constants/urls';
import axios from 'axios';

export const GlobalState = (props) => {

    const [posts, setPosts] = useState([])

    const getPosts = () => {
        axios
        .get(`${BASE_URL}/posts?size=30`, {headers: { Authorization: localStorage.getItem("token") }})
        .then((res) => {
            setPosts(res.data)
        })
    };

    useEffect(() => {
        getPosts();
    }, []);

    return <GlobalStateContext.Provider value={{posts, getPosts}}>
        {props.children}
    </GlobalStateContext.Provider>
}
