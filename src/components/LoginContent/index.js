import React, { useState } from "react";
import { ContentStyle } from './style'

const LoginContent = () => {
    const [visible, setVisible] = useState(true);
    return (
        <ContentStyle>
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
                    <div className="LoginHelp">
                        <div className="checkRemember">
                            <input type="checkbox" id="checkR" value="true" />
                            <label for="checkR">
                                <span className="rememberMeText">로그인 정보 저장</span>
                            </label>
                        </div>
                        <a href='/LoginHelp' className="LoginHelpLink">도움이 필요하신가요?</a>
                    </div>
                </div>
                <div className="LoginSubText">
                    <div className="SignUpNow">
                        Netflix 회원이 아닌가요?
                        <a href='/intro'>지금 가입하세요</a>
                    </div>
                    <div className="RecaptchaMsg">
                        <p>
                            <span>
                                이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.
                            </span>
                            <button onClick={() => {
                                setVisible(!visible);
                            }}>
                                {visible ? "자세히 알아보기." : ""}
                            </button>
                        </p>
                        {!visible && <div className="RecaptchaToU">
                            Google reCAPTCHA가 수집하는 정보에는 Google <br></br> <a href='https://policies.google.com/privacy'>개인정보처리방침</a>과 <a href='https://policies.google.com/terms'>서비스 약관</a>이 적용되며, 해당 정보는 reCAPTCHA 서비스 제공, 관리 및 개선과 일반적인 보안 <br></br> 유지에 사용됩니다(Google의 개인 맞춤 광고에 사용 안 함).
                        </div>}
                    </div>
                </div>
            </article>
        </ContentStyle >
    )
}

export default LoginContent;