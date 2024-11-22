import {forwardRef, useEffect, useState} from "react";
import _ from "lodash"
import Picture from "../picture/Picture";
import "./Frame.css"

const Frame = ({ref, frameStyle, frameColor, frameImage, frameHost, frameTitle}) => {

    const [image, setImage] = useState("");

    useEffect(() => {
        if (!_.isEmpty(frameImage)) {
            setImage(frameImage)
        }
    }, [frameStyle, frameImage, frameHost, frameTitle]);

    return <div className="Frame">
        <FrameImage frameStyle={frameStyle} frameImage={frameImage} />
        <FrameColor frameStyle={frameStyle} />
        <div ref={ref} className="frame frame-4cut" >
            <div className="frame-title">{frameTitle}</div>
            <div className="frame-host">{frameHost}</div>
            <Picture id={"leftTop"} position={"leftTop"} />
            <Picture id={"leftBottom"} position={"leftBottom"} />
            <Picture id={"rightTop"} position={"rightTop"} />
            <Picture id={"rightBottom"} position={"rightBottom"} />
        </div>
    </div>
}

const FrameImage = (props) => {
    if (props.frameStyle === 'IMAGE') {
        return <img className="frame frame-image" src={props.frameImage} alt="frame-image"/>
    }
    return null;
}

const FrameColor = (props) => {
    if (props.frameStyle === 'IMAGE') {
        return null;
    }
    return <div className="frame frame-color" style={{
        backgroundColor: props.frameColor
    }}/>
}

export default Frame;