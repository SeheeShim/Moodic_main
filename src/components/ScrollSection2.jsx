import React from 'react';
import './ScrollSection.scss';
const ScrollSection2 = () => {
    return (
        <div className='scroll-section scroll-section2'>
             <div className="medal">
                <img src={process.env.PUBLIC_URL + "/img/scroll/2.png"} alt="" />
            </div>
            <div className="ect">
                <img src={process.env.PUBLIC_URL + "/img/scroll/Phonograph.png"} alt="" />
            </div>
            <div className="BeyonceImgInfo">
                
                <div className="BeyonceInfo">
                    <h3><img src={process.env.PUBLIC_URL + "/img/scroll/Classic Music.png"} alt="" /></h3>
                    <h2><img src={process.env.PUBLIC_URL + "/img/ScrollText3.png"} alt="" /></h2>
                    <div className="BeyonceText">
                        <div className="name">비욘세 (Beyoncé Knowles‑Carter)</div>
                        <ul>
                            <li>전 세계 팝·컨트리 아이콘으로, 데스티니스 차일드 출신 이후 솔로 아티스트로서 음악 산업 전반에 엄청난 영향력을 행사하고 있다</li>
                            <li>강렬한 퍼포먼스와 사회적 메시지로 여성성과 흑인 정체성을 대표하며, 장르의 경계를 허무는 아티스트이다.</li>
                        </ul>
                        <div className="title">🎉 최근 주요 수상 내역</div>
                        <ul>
                            <li>2025 그래미 어워드 (2월 2일): Cowboy Carter로 Album of the Year 및 Best Country Album, 그리고 “II Most Wanted” (ft.Miley Cyrus)로 Best Country Duo/Group Performance 수상 </li>
                            <li>이로써 그녀는 그래미 역사상 첫 흑인 여성으로 컨트리 앨범상을 수상한 인물이 되었으며, <br />
                                앨범상까지 수상하며 장르를 넘나드는 경이로운 성과를 이뤘습니다
                            </li>
                           
                        </ul>
                    </div>
                </div>
                <div className="BeyonceImg">
                    <img src={process.env.PUBLIC_URL + "/img/scroll/image 90.png"} alt="Beyonce" />
                </div>
            </div>
        </div>
    );
};

export default ScrollSection2;