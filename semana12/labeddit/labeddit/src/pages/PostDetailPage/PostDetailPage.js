import React from 'react'
import PostDetail from '../../components/PostDetail/PostDetail'
import UseProtectedPage from '../../hooks/useProtectedPage'
import HeaderProtectedPages from '../../components/Header/HeaderProtectedPages'

export default function PostDetailPage() {

    UseProtectedPage()

    return (
        <div>
            <HeaderProtectedPages />
            <PostDetail />
        </div>
    )
}