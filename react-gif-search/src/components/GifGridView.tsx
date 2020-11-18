import React, { useEffect } from "react"
import useGif from "../hooks/useGif"
import GifItem from "./GifItem";
import "./GifGridView.css"

type GifGridProps = {
    keyword : any;
}

function GifGridView({keyword} : GifGridProps){

    const {gifState, getAllGifs} = useGif(keyword);

    useEffect(()=>{
        getAllGifs()
    }, [])


    if(gifState.length === 0){
        return(
            <div>
                Empty GIFs
            </div>
        )
    }

    return(
        <div>
            <div className="grid_wrapper">
                <div className="grid_view">
                    {gifState.map((gif, index) => <GifItem gif={gif} key={index}/>)}
                </div>
            </div>
        </div>
    ) 
}

export default GifGridView