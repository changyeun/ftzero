import {useState} from "react";
import ImageUploader from "../uploader/ImageUploader";
import WebCamera from "../camera/WebCamera";
import _ from "lodash";
import "./Picture.css"


const Picture = ({position}) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [showCamera, setShowCamera] = useState(false);

    const handleUploader = (type, url) => {
        if (type === 'CAMERA') {
            setShowCamera(true)
            return;
        }
        setImageUrl(url)
    }

    const executeCapture = (imageUrl) => {
        setShowCamera(false)
        setImageUrl(imageUrl)
    }

    const renderUploader = () => {
        if (_.isEmpty(imageUrl)) {
            return <ImageUploader selectUploader={handleUploader}/>
        }
        return null;
    }

    const renderCamera = () => {
        if (showCamera === false) {
            return null;
        }
        return <WebCamera propsWidth={205}
                          propsHeight={300}
                          executeCapture={executeCapture}/>
    }

    const renderImage = () => {
        if (_.isEmpty(imageUrl)) {
            return null;
        }
        return <img className="frame-image" src={imageUrl} alt="frame-image"/>
    }

    return <div className={`Picture ${position}`}>
        {renderUploader()}
        {renderCamera()}
        {renderImage()}
    </div>
}


export default Picture;