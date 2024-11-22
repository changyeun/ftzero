import React, {useCallback, useState, useRef} from 'react';
import Webcam from "react-webcam";
import './WebCamera.css';

const WebCamera = ({ propsWidth, propsHeight, executeCapture }) => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);

    const [width, setWidth] = useState(propsWidth || 205);
    const [height, setHeight] = useState(propsHeight || 335);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        executeCapture(imageSrc)
        setImgSrc(imageSrc);
    }, [webcamRef, setImgSrc]);

    return <div className="WebCamera">
        <div style={{
            width: "100%",
            position: "relative"
        }}>
            <Webcam
                audio={false}
                width={width}
                height={height}
                ref={webcamRef}
                imageSmoothing={true}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                    facingMode: "FACING_MODE_ENVIRONMENT",
                }}
            />
            <button
                className="btn-capture"
                onClick={capture}>
                촬영
            </button>
        </div>
    </div>
}

export default WebCamera;