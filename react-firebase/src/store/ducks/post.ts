import { ActionType, createAsyncAction, createReducer } from "typesafe-actions"

// action types
export const GET_POSTS_REQUEST = "post/GET_POSTS_REQUEST" as const 
export const GET_POSTS_SUCCESS = "post/GET_POSTS_SUCCESS" as const 
export const GET_POSTS_FAILURE = "post/GET_POSTS_FAILURE" as const

//types
export type Post = {
    content: string;
    tag: string;
    created_at: number;
    local_category: string;
    image_urls: string[];
    univ_category: string;
    id: string;
    writer_id: string;
}

export type PostReq = {
    keyword : string;
}

export type PostRes = {
    posts : Post[]
}

export type PostErr = {
    message : string;
}

export type PostState = {
    keyword : string;
    posts : Post[];
    message : string;
}

export const postActionTypes = createAsyncAction(GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE)<PostReq, PostRes, PostErr>()

export const postActions = {
    postActionTypes
}
export type PostAction = ActionType<typeof postActions>

export const initialState : PostState= {
    keyword : "",
    posts : [],
    message : ""
}

export const postReducer = createReducer<PostState, PostAction>(initialState)
    .handleAction(postActionTypes.request, (state, action) => {
        return {
            ...state,
            keyword : action.payload.keyword
        }
    })
    .handleAction(postActionTypes.success, (state, action) => {
        return {
            ...state,
            posts : action.payload.posts
        }
    })
    .handleAction(postActionTypes.failure, (state, action) => {
        return {
            ...state,
            message : action.payload.message
        }
    })

export type PostReducerState = ReturnType<typeof postReducer>
export default postReducer