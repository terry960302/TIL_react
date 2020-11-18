import React, { useEffect } from "react"
import db from "../apis/database/firestore";
import usePost from "../hooks/usePost";
import PostItem from "./PostItem";



export default function PostList(){

    const {postState, getAllPosts} = usePost("");

    useEffect(() => {
        getAllPosts()
    }, [])

    if(postState === undefined){
        return (
            <div>
                Post undefined
            </div>
        )
    } else if(postState.length == 0){
        return (
            <div><h1>Empty list</h1></div>
        )
    } else{
        return (
            <div>
                {postState.map((post, index) => <PostItem post={post} key={index}/>)}
            </div>
        )
    }    

}