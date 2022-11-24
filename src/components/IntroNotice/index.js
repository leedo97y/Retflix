//IntroNotice
import React from "react";
import {NoticeDiv} from'./style';

const IntroNotice = (props)=>{
    return (
        <NoticeDiv style={{ backgroundImage: `url(${props.src})`}}>
            <div className="noticeContainer">
                <div>영화와 시리즈를 무제한으로.</div>
                <div>다양한 디바이스에서 시청하세요. 언제든 해지할 수 있습니다.</div>
                <div>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</div>
                <form>
                    <input
                        placeholder="이메일 주소"
                    />
                    <button>시작하기 </button>
                </form>
            </div>
        </NoticeDiv>
    );
}
export default IntroNotice;