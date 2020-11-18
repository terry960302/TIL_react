import React, { ChangeEvent, FormEvent, useState } from "react"

type Form = {
    name : string;
    description : string;
}

type MyFormProps = {
    onSubmit : (form : Form) => void;
}

function MyForm({onSubmit} : MyFormProps){
    const [form, setForm] = useState<Form>({
        name : "",
        description : ""
    }) // 처음 form을 비어있게 만듬

    const {name, description} = form

    const onChange = (e : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target // 바뀐 값을 받아옴

        // console.log(name) // 그냥 명목상 이 value가 무엇을 뜻하는지 알려주기 위한 제목느낌
        // console.log(value) // 실제 바뀐 값

        setForm({
            ...form,
            [name] : value
        })
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onSubmit(form) // 부모 컴포넌트인 App 컴포넌트에서 받은 onSubmit 함수를 여기서 실행함

        // 함수 실행 완료하면 값 초기화
        setForm({
            name : "",
            description : "",
        })


    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="이름" value={name} onChange={onChange}/>
            <input name="설명" value={description} onChange={onChange}/>
            <button type="submit">등록</button>
        </form>
    )

}

export default MyForm