import React, { useState, useRef } from 'react';
import { FormStyle } from './style';
import { useLocation } from 'react-router-dom';

const LoginForm = ({ onSubmit }) => {
    const location = useLocation()
    let getid = '';
    if (location.state !== null) {
        getid = location.state.id;
    }

    const [id, setID] = useState(getid);

    // ID 유효성 검사
    const checkID = evt => {
        // 영문·숫자 only, @ 필수, . 이후 2~3글자, 최대 50자
        const idRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        if (!idRegex.test(evt.target.value)) {
            alert('아이디는 영문·숫자 조합 및 @가 존재합니다.');
        }
    }

    const idRef = useRef();
    const pwRef = useRef();

    const submitForm = evt => {
        evt.preventDefault();

        const id = idRef.current.value;
        const password = pwRef.current.value;
        const formData = {
            id,
            password,
        };

        //비밀번호 유효성 검사
        const pwRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,60}$/;
        if (!pwRegex.test(password)) {
            alert('비밀번호는 6~60자리 영문·숫자 조합입니다.');
        }

        onSubmit(formData);
    };

    return (
        <FormStyle>
            <div className='LoginForm'>
                <div className='FieldID'>
                    <label>
                        <input required className='InputID' placeholder='이메일 주소 또는 전화번호' maxLength='50' type='text' value={id} ref={idRef} onBlur={checkID} onChange={(evt) => { setID(evt.target.value) }}>
                        </input>
                    </label>
                </div>
                <div className='FieldPW'>
                    <label>
                        <input required className='InputPW' placeholder='비밀번호' maxLength='60' type='password' ref={pwRef}  >
                        </input>
                    </label>
                </div>
                <button className='LoginBtn' onClick={submitForm}>
                    로그인
                </button>
            </div>
        </FormStyle>
    )


}

export default LoginForm;