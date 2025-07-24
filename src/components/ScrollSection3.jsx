import React from 'react';
import './ScrollSection.scss';

const ScrollSection3 = () => {
    return (
        <div className='scroll-section scroll-section3'>
            <div className="medal">
                <img src={process.env.PUBLIC_URL + "/img/scroll/3.png"} alt="" />
            </div>
            <div className="sabrinaImgInfo">
                <div className="sabrinaImg">
                    <img src={process.env.PUBLIC_URL + "/img/scroll/image 92.png"} alt="Sabrina Carpenter" />
                </div>
                <div className="sabrinaInfo">
                    <h3><img src={process.env.PUBLIC_URL + "/img/scroll/Music Record.png"} alt="" /></h3>
                    <h2><img src={process.env.PUBLIC_URL + "/img/ScrollText2.png"} alt="" /></h2>
                    <div className="sabrinaText">
                        <div className="name">사브리나 카펜터 (Sabrina Carpenter)</div>
                        <ul>
                            <li>미국 팝 싱어송라이터 겸 배우로, 개인적인 이야기와 감성적인 가사를 담은 음악으로 전 세계 팬들과 깊게 공감하며 성장한 아티스트이다.</li>
                            <li>2022년 앨범 Emails I Can’t Send를 시작으로 2024년 Short n’ Sweet를 통해 음악적 전환기에 서며, 장르를 넘나드는 매력을 보여주고 있다.</li>
                            <li>무대 위에서의 카리스마와 솔직한 표현력으로 차세대 팝스타 중에서도 특히 주목받고 있다.</li>
                        </ul>
                        <div className="title">🎉 최근 주요 수상 내역</div>
                        <ul>
                            <li>2025 그래미 어워드(2월): 🎵 *“Espresso”*로 Best Pop Solo Performance 수상  </li>
                            <li>💿 앨범 Short n’ Sweet로 Best Pop Vocal Album 수상</li>
                        
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="ect">
                <img src={process.env.PUBLIC_URL + "/img/scroll/Guitar Amp.png"} alt="" />
            </div>
        </div>
    );
};

export default ScrollSection3;