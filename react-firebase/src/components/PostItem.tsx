import React from "react"
import { Post } from "../store/ducks/post"

type PostProps = {
    post : Post
}

export default function PostItem({post}: PostProps ){
    return (
        <div>
            <h2>{post.id}</h2>
        </div>
    )
}