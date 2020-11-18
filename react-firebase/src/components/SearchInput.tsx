import React from "react"
import "./SearchInput.css"
import { BsSearch } from "react-icons/bs";


export default function SearchInput(){
    return (
        <div className="frame">
            <div className="center">
                <input type="text" placeholder="Search by posting description"/>
                <div className="search_button">
                    <BsSearch/>
                </div>
            </div>            
        </div>
    )
}