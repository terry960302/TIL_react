import React from "react"
import { Link } from "react-router-dom"
import { Gif } from "../ducks/gif_reducer"
import "./GifItem.css"

interface GifProps {
    gif : Gif
}

function GifItem({gif} : GifProps){
    return (
        <div className="card_view">
            <div className="image_box">
            <img src={gif.url} alt="No Image" height="250px"/>
            </div>
            <div className="desc">
                <div className="title">{gif.size}</div>
            <div className="subtitle">{gif.url}</div>
                    </div>
            <Link className="more_btn" to="/gif_detail_page">
                <button >More</button>
            </Link>
        </div>
    )
}

export default GifItem