import React, { ChangeEvent, FormEvent, useState } from 'react'
import useGif from '../hooks/useGif'
import "./KeywordInput.css"

type KeywordInputProps = {
    props : {
        setValue :React.Dispatch<React.SetStateAction<any>>;
    }
}

function KeywordInput({props} : KeywordInputProps) {

    const [keyword, setKeyword] =  useState("")
    const {getAllGifs} = useGif(keyword);


    const onChange = (e : ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }

    const onSubmit = (e : FormEvent) => {
        e.preventDefault()
        props.setValue(keyword)
        getAllGifs()
        setKeyword("")

    }


    return (
        <div className="input-wrapper">
            <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={keyword}/>
            <button type="submit">검색</button>
            </form>
        </div>
    )
}

export default KeywordInput
