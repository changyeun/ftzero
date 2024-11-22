import "./ItemScreen.css"
import itemContent from "../../assets/images/item.png"
import Player from 'lottie-react';
import animationData from "../../assets/json/loading.json"

const ItemScreen = () => {
    return <div className="ItemScreen">
        <div className="item-top">
            <span className="item-top-header">다운로드 중</span>
            <Player  autoplay
                     loop
                     animationData={animationData}
                     style={{ height: '28px', width: '28px' }}
             />
        </div>
        <div className="item-section">
            <img src={itemContent} alt="item" className="item-content-img"/>
        </div>
    </div>
}

export default ItemScreen;