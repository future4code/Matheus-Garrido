import React from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import Posts from '../../components/Posts/Posts'
import UseProtectedPage from '../../hooks/useProtectedPage'
import HeaderProtectedPages from '../../components/Header/HeaderProtectedPages'

export default function FeedPage() {

    UseProtectedPage()

    return (
        <div>
            <HeaderProtectedPages />
            <CreatePost />
            <Posts />
        </div>
    )
}