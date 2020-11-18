import { useDispatch, useSelector } from "react-redux";
import { getGifs, GifState } from "../ducks/gif_reducer";

function useGif(keyword : string){
    const dispatch = useDispatch()

    const gifState = useSelector((state : GifState) => state.gifs)

    const getAllGifs = ()=> dispatch(getGifs.request({keyword : keyword}))

    return {
        gifState,
        getAllGifs,
    }
}

export default useGif;