//introPage 넷플릭스 가장 첫화면
import React from "react";
import IntroHeader from "components/IntroHeader";
import { IntroContentText, IntroContentVideo } from "components/IntroContent";
import IntroNotice from "components/IntroNotice";
import { IntroContainer, IntroContent } from "./style"
import Footer from "components/Footer"

const Intro = () => {
    const intro = [
        {
            header: <>TV로 즐기세요.</>,
            content: <>스마트 TV, PlayStation, Xbox, Chromecast,<br /> Apple TV, 블루레이 플레이어 등 다양한<br /> 디바이스에서 시청하세요.</>
        },
        {
            header: <>다양한 디바이스에서<br /> 시청하세요.</>,
            content: <>각종 영화와 시리즈를 스마트폰, 태블릿, 노트북,<br /> TV에서 무제한으로 스트리밍하세요. 추가<br /> 요금이 전혀 없습니다.</>
        },
        {
            header: <>어린이 전용 프로필을<br /> 만들어 보세요.</>,
            content: <>자기만의 공간에서 좋아하는 캐릭터와 즐기는<br /> 신나는 모험. 자녀에게 이 특별한 경험을<br /> 선물하세요. 넷플릭스 회원이라면 무료입니다.
            </>
        },
        {
            header: <>즐겨 보는 콘텐츠를<br /> 저장해 오프라인으로<br /> 시청하세요.</>,
            content: <>광고형 베이식을 제외한 모든 멤버십에서<br /> 이용할 수 있습니다.</>
        },
    ];
    const videostyle = [
        {
            height: '50%',
            margintop: '100px',
            src: `https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png`,
            videosrc: `https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v`
        },
        {
            height: '38%',
            margintop: '70px',
            src: `https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png`,
            videosrc: `https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v`
        },
        {
            height: '38%',
            margintop: '30px',
            src: `https://occ-0-3996-2219.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABe3Dqef6rg30BxYraI75i97IeQjD0YxUuToAnSA23dl0XQFrjXaFTWIB0HHy4TH_s094NU-9IjLpE_96AvWpTZTAQOR_icyEYcsB.png?r=acf`,
            videosrc: ``
        },
        {
            height: '10%',
            margintop: '100px',
            src: `https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg`,
            videosrc: ``
        }

    ]
    return (
        <IntroContainer>
            <IntroHeader />
            <IntroNotice src={`https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/47e9a72c-4e54-4be7-993f-91413ee2dd47/KR-ko-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg`}>
            </IntroNotice>
            <IntroContent>
                <div className="border">
                    <IntroContentText header={intro[0].header} content={intro[0].content} />
                    <IntroContentVideo height={videostyle[0].height} margintop={videostyle[0].margintop} src={videostyle[0].src} videosrc={videostyle[0].videosrc} />
                </div>
            </IntroContent>
            <IntroContent>
                <div className="border">
                    <IntroContentVideo height={videostyle[1].height} margintop={videostyle[1].margintop} src={videostyle[1].src} videosrc={videostyle[1].videosrc} />
                    <IntroContentText header={intro[1].header} content={intro[1].content} />
                </div>
            </IntroContent>
            <IntroContent>
                <div className="border">
                    <IntroContentText header={intro[2].header} content={intro[2].content} />
                    <IntroContentVideo height={videostyle[2].height} margintop={videostyle[2].margintop} src={videostyle[2].src} videosrc={videostyle[2].videosrc} />
                </div>
            </IntroContent>
            <IntroContent>
                <div className="border">
                    <IntroContentVideo height={videostyle[3].height} margintop={videostyle[3].margintop} src={videostyle[3].src} videosrc={videostyle[3].videosrc} />
                    <IntroContentText header={intro[3].header} content={intro[3].content} />
                </div>
            </IntroContent>
            <Footer />
        </IntroContainer>
    );
};

export default Intro;
