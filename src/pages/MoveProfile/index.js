import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Middle, FirstDiv, SecondDiv, Left, Right, TextDiv, ButtonDiv } from './style';
import { BsCheck2 } from 'react-icons/bs';

const MoveProfile = () => {
    return (
        <>
            <Header />
            <FirstDiv></FirstDiv>
            <Middle>
                <SecondDiv>
                    <Left>
                        <h1>프로필 이전을 허용하시겠어요?</h1>
                        <TextDiv>
                            <li>
                                <div>
                                    <BsCheck2 />
                                    <p>
                                        회원님의 계정을 함께 이용하는 사용자들이 추천 콘텐츠, 시청
                                        기록, 내가 찜한 콘텐츠, 저장한 게임, 설정 등의 정보가 담긴
                                        프로필을 본인의 유료 멤버십으로 이전할 수 있게 됩니다.
                                        <a href="https://help.netflix.com/ko/node/122698">
                                            {' '}
                                            자세히 알아보기.
                                        </a>
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <BsCheck2 />
                                    <p>
                                        이 기능을 허용해도 계정에 등록된 디바이스에서 로그아웃되지
                                        않습니다. 결제 정보는 절대로 이전되지 않습니다. 키즈
                                        프로필은 이전할 수 없습니다.
                                    </p>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <BsCheck2 />
                                    <p>
                                        프로필이 회원님 계정에서 이전되도록 허용하려면 아래 버튼을
                                        클릭하기만 하면 됩니다.
                                    </p>
                                </div>
                            </li>
                        </TextDiv>
                        <ButtonDiv>
                            <button>허용</button>
                            <button>
                                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
                                    홈으로 돌아가기
                                </Link>
                            </button>
                        </ButtonDiv>
                    </Left>
                    <Right></Right>
                </SecondDiv>
            </Middle>
            <Footer />
        </>
    );
};

export default MoveProfile;
