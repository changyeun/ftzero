import React, {useRef, useState} from "react";
import ImageUploader from "../../components/uploader/ImageUploader";
import Frame from "../../components/frame/Frame";
import "./HomeScreen.css"
import html2canvas from "html2canvas";
import WebCamera from "../../components/camera/WebCamera";
import downloadIcon from "../../assets/images/downloads.png"
import ItemScreen from "../item/ItemScreen";


const HomeScreen = () => {

    const divRef = useRef(null);

    const [hasFrame] = useState(false)

    const [frameStyle, setFrameStyle] = useState("color");
    const [frameImage, setFrameImage] = useState(null);
    const [frameColor] = useState("black");

    //  frame image / camera
    const [showCamera, setShowCamera] = useState(false);

    //  frame text
    const [title, setTitle] = useState("");
    const [host, setHost] = useState("");

    //  download
    const [isDownload, setIsDownload] = useState(false);

    const executeFrameCapture = (imageUrl) => {
        setShowCamera(false)
        setFrameStyle("IMAGE")
        setFrameImage(imageUrl)
    }

    const selectUploader = (type, url) => {
        if (type === 'CAMERA') {
            setShowCamera(true);
            return;
        }
        setFrameStyle("IMAGE")
        setFrameImage(url)
    }

    const renderCamera = () => {
        if (showCamera === false) {
            return null;
        }
        return <WebCamera propsWidth={430}
                          propsHeight={430}
                          executeCapture={executeFrameCapture}/>
    }

    const renderUploader = () => {
        if (hasFrame) {
            return null;
        }
        return <div className="uploader">
            <ImageUploader selectUploader={selectUploader} type={"horizontal"}/>
        </div>
    }

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleHost = (event) => {
        setHost(event.target.value);
    }

    const download = async () => {
        setIsDownload(true)
        setTimeout(async () => {
            setIsDownload(false)
            if (divRef.current) {
                const canvas = await html2canvas(divRef.current);
                const image = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = image;
                link.download = "captured-div.png";
                link.click();
            }
        }, 3000);
    }

    const renderDownload = () => {
        if (isDownload) {
            return <ItemScreen/>
        }
        return null;
    }
    return <div className="HomeScreen">
        <div ref={divRef}>
            <Frame
                frameStyle={frameStyle}
                frameImage={frameImage}
                frameColor={frameColor}
                frameTitle={title}
                frameHost={host}
            />
        </div>
        <div style={{padding: "0 20px"}}>
            <span className="frame-setting-title">FRAME 설정</span>
            <div style={{display: "flex"}}>
                <div style={{width: "100%"}}>
                    <div className="setting-label">
                        <label>제목</label>
                        <input type="text" value={title} onChange={handleTitle}/>
                    </div>
                    <div className="setting-label">
                        <label>주최자</label>
                        <input type="text" value={host} onChange={handleHost}/>
                    </div>
                </div>
                <div className="download-box">
                    <button className="btn-download" onClick={download}>
                        <img src={downloadIcon} className="btn-img-download" alt="download"/>
                    </button>
                </div>
            </div>
        </div>
        {renderUploader()}
        {renderCamera()}
        {renderDownload()}
    </div>
}

export default HomeScreen;