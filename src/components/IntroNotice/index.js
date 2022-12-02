//IntroNotice
import React,{useState} from "react";
import {NoticeDiv} from'./style';
import { useNavigate } from 'react-router-dom';


const inputStatus ={
    NORMAL: "normal",
    ERROR: "error",
    SUCCESS: "success",
}

const IntroNotice = (props)=>{
    const [status,setStatus] = useState(inputStatus.NORMAL);
    const [email,setEmail] = useState('');
    const [err,setErr] = useState('');
    const navigate = useNavigate();

    const emailHandler=(evt)=>{ //input 바뀔때마다
        evt.preventDefault();
        setEmail(evt.target.value);
        if(email.length===0){
            setStatus(inputStatus.NORMAL);
        }
    }
    const checkEmailHandler=(evt)=>{ //버튼 클릭시
        evt.preventDefault();
        const check = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if(check.test(email)){
            setStatus(inputStatus.SUCCESS);
            navigate(`/login`,{
                state:{
                    id : email
                }
            });
            
        }else{
            setErr("정확한 이메일 주소를 입력하세요.");
            setStatus(inputStatus.ERROR)
        }
    }

    return (
        <NoticeDiv>
            <div className="noticeContainer">
                <div>영화와 시리즈를 무제한으로.</div>
                <div>다양한 디바이스에서 시청하세요. 언제든 해지할 수 있습니다.</div>
                <div>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</div>
                <form>
                    <input
                        placeholder="이메일 주소" onChange={emailHandler} value={email}
                        className={status}
                    />
                    <button onClick={checkEmailHandler}>시작하기</button>
                </form>
                <span className="errorText">
                {status === inputStatus.ERROR && err}
                </span>
            </div>
        </NoticeDiv>
    );
}
export default IntroNotice;