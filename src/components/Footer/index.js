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
                                <li>
                                    <a href="https://about.netflix.com/ko/new-to-watch">
                                        신규 콘텐츠
                                    </a>
                                </li>
                                <li>
                                    <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">
                                        투자 정보(IR)
                                    </a>
                                </li>
                                <li>
                                    <a href="https://help.netflix.com/legal/privacy">개인 정보</a>
                                </li>
                                <li>
                                    <a href="https://fast.com/ko/">속도 테스트</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href="https://help.netflix.com/ko/">고객 센터</a>
                                </li>
                                <li>
                                    <a href="https://jobs.netflix.com/">입사 정보</a>
                                </li>
                                <li>
                                    <a href="#">쿠키 설정</a>
                                </li>
                                <li>
                                    <a href="https://help.netflix.com/legal/notices">법적 고지</a>
                                </li>
                            </ul>
                        </div>
                    </LeftDiv>

                    <RightDiv>
                        <div>
                            <ul>
                                <li>
                                    <a href="https://www.netflix.com/YourAccount">계정</a>
                                </li>
                                <li>
                                    <a href="https://devices.netflix.com/ko/">
                                        넷플릭스 지원 디바이스
                                    </a>
                                </li>
                                <li>
                                    <a href="https://help.netflix.com/ko/legal/corpinfo">
                                        회사 정보
                                    </a>
                                </li>
                                <li>
                                    <a href="https://about.netflix.com/ko/top-10">
                                        오직 넷플릭스에서
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <a href="https://media.netflix.com/ko/">미디어 센터</a>
                                </li>
                                <li>
                                    <a href="https://help.netflix.com/legal/termsofuse">
                                        이용 약관
                                    </a>
                                </li>
                                <li>
                                    <a href="https://help.netflix.com/ko/contactus">문의 하기</a>
                                </li>
                            </ul>
                        </div>
                    </RightDiv>
                </MiddleDiv>
                <BottomDiv>
                    <p>넷플릭스 대한민국</p>
                    <p id="detail">
                        넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호
                        전화번호: 080-001-9587 <br />
                        대표: 레지널드 숀 톰프슨 <br />
                        이메일 주소: korea@netflix.com <br />
                        주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호
                        03161 <br />
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
