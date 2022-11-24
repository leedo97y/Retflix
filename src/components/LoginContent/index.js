import React from "react";
import { ContentStyle } from './style'

const LoginContent = () => {
    return (
        <ContentStyle>
            {/* <img src={loginBG} alt="loginBG" className="loginBG" /> */}
            <article className="LoginContent">
                <div className="LoginMainForm">
                    <h1>로그인</h1>
                    <div className="LoginForm">
                        <div className="FieldID">
                            <label>
                                <input className="InputID" placeholder="이메일 주소 또는 전화번호">
                                </input>
                            </label>
                        </div>
                        <div className="FieldPW">
                            <label>
                                <input className="InputPW" placeholder="비밀번호">
                                </input>
                            </label>
                        </div>
                        <button className="LoginBtn">
                            로그인
                        </button>
                    </div>
                </div>
                <div className="LoginSubText">
                    <div className="SignUpNow">
                        Netflix 회원이 아닌가요?
                        <a href='/'>지금 가입하세요</a>
                        .
                    </div>
                    <div className="RecaptchaMsg">
                        <p>
                            <span>
                                이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.
                            </span>
                            <button>
                                자세히 알아보기.
                            </button>
                        </p>
                    </div>
                </div>
            </article>
        </ContentStyle >
    )
}

export default LoginContent;