import { useState } from "react";

const PassWordChange = () => {

    const [password, setPassWord] = useState("")
    const onChangePassWord = (event) => {
        setPassWord(event.target.value);
        console.log(password);
    }
    const onSubmitPassWord = (event) => {
        alert('변경도니 비밀번호 : ${password}');
    }
    return (
        <>
         <div>
            <h1>비밀번호 변경하기</h1>
            <input onChange={onChangePassWord}></input>
            <button onKeyDown={onSubmitPassWord}>비밀번호 변경</button>
         </div>
        </>
    )
}

export default PassWordChange;