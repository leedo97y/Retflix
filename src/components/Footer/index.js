import React from 'react';
import { FooterBody, TopDiv, MiddleDiv, BottomDiv, LeftDiv, RightDiv } from './style';

const Footer = () => {
    return (
        <>
            <FooterBody>
                <TopDiv>
                    <p>질문이 있으신가요? 문의전화: 080-001-9587</p>
                </TopDiv>
                <MiddleDiv>
                    <LeftDiv>
                        <div>
                            <ul>
                                <li>자주 묻는 질문</li>
                                <li>투자 정보</li>
                                <li>개인정보</li>
                                <li>속도 테스트</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>고객 센터</li>
                                <li>입사 정보</li>
                                <li>쿠키 설정</li>
                                <li>업적 고지</li>
                            </ul>
                        </div>
                    </LeftDiv>

                    <RightDiv>
                        <div>
                            <ul>
                                <li>계정</li>
                                <li>넷플릭스 지원 디바이스</li>
                                <li>회사 정보</li>
                                <li>오직 넷플릭스에서</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>미디어 센터</li>
                                <li>이용 약관</li>
                                <li>문의 하기</li>
                            </ul>
                        </div>
                    </RightDiv>
                </MiddleDiv>
                <BottomDiv>
                    <p>넷플릭스 대한민국</p>
                    <p id="detail">
                        넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
                        제2018-서울종로-0426호 전화번호: 080-001-9587 <br />
                        대표: 레지널드 숀 톰프슨 <br />
                        이메일 주소: korea@netflix.com <br />
                        주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
                        우편번호 03161 <br />
                        사업자등록번호: 165-87-00119 <br />
                        클라우드 호스팅: Amazon Web Service Inc. <br />
                        공정거래위원회 웹사이트
                    </p>
                </BottomDiv>
            </FooterBody>
        </>
    );
};

export default Footer;
