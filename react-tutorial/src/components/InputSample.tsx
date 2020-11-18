import React, { ChangeEvent, useState, useRef } from 'react';

function InputSample() {

  const [inputs, setInputs] = useState({
    name : "",
    email : "",
  })

  const nameInput : React.MutableRefObject<any>= useRef(); //DOM의 ref에 접근

  const onChange = (e : ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name : "",
      email : "",
    })
    nameInput.current.focus(); // input에 포커싱
  };


  return (
    <div>
      <input placeholder="이름" />
      <input placeholder="닉네임" />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        이름 (닉네임)
      </div>
    </div>
  );
}

export default InputSample;