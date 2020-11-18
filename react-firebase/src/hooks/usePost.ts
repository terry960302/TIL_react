import { useDispatch, useSelector } from "react-redux";
import { postActionTypes, PostState } from "../store/ducks/post";


function usePost(keyword : string){
    const dispatch = useDispatch()

    const postState = useSelector((state : PostState) => state.posts)

    const getAllPosts = () => dispatch(postActionTypes.request({keyword : keyword}))
    return {
        postState, 
        getAllPosts,
    }
}

export default usePost