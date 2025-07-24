import React from 'react';
import './scrollssection1.scss';

const ScrollSection1 = () => {
    return (
        <div className='scroll-section scroll-section1'>
            <h2><img src={process.env.PUBLIC_URL + "/img/t_1.png"} alt="The grammy Awards" /></h2>
            <h3 className='Tit'><img src={process.env.PUBLIC_URL + "/img/t_2.png"} alt="" /></h3>
            <div className="medal">
                <img src={process.env.PUBLIC_URL + "/img/scroll/1.png"} alt="" />
            </div>
            <div className="kendrickImgInfo">
                <div className="kendrickImg">
                    <img src={process.env.PUBLIC_URL + "/img/scroll/image 91.png"} alt="Kendrick Lamar" />
                </div>
                <div className="kendrickInfo">
                    <h3><img src={process.env.PUBLIC_URL + "/img/scroll/Musical Note.png"} alt="" /></h3>
                    <h2><img src={process.env.PUBLIC_URL + "/img/ScrollText4.png"} alt="" /></h2>
                    <div className="kendrickText">
                        <div className="name">켄드릭 라마 (Kendrick Lamar Duckworth)</div>
                        <ul>
                            <li>미국 캘리포니아 컴프턴 출신의 래퍼이자 작곡가, 프로듀서로, 사회적 메시지를 담은 '컨셔스 랩'의 대표주자이다.</li>
                            <li>예술성과 스토리텔링 능력으로 힙합의 경계를 넓혔으며, 2018년 *DAMN.*으로 퓰리처상을 수상한 최초의 래퍼이다.</li>
                            <li>시대의 불평등과 정체성을 음악으로 풀어내며 힙합 역사상 가장 영향력 있는 아티스트 중 하나로 꼽힌다.</li>
                        </ul>
                        <div className="title">🎉 최근 주요 수상 내역</div>
                        <ul>
                            <li>2025 그래미 어워드(2월): *“Not Like Us”*로 Record of the Year, Song of the Year, Best Rap Performance, Best Rap Song, Best Music Video 등 5관왕 달성</li>
                            <li>2025 BET 어워드(6월): 앨범 GNX로 Album of the Year 수상</li>
                            <li>2025 슈퍼볼 하프타임 쇼(2월): 힙합 솔로 아티스트 최초로 하프타임 쇼 단독 헤드라이너로 선정되어 역사적 공연 진행</li>
                            <li>2025 에미상 노미네이션(7월): 슈퍼볼 공연으로 Outstanding Music Direction 등 에미상 주요 부문 후보 지명</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="ect">
                <img src={process.env.PUBLIC_URL + "/img/scroll/Rock Music.png"} alt="" />
            </div>
        </div>
    );
};

export default ScrollSection1;