import cameraImage from "../../assets/images/camera.png"
import galleryImage from "../../assets/images/gallery.png"
import "./ImageUploader.css"

const ImageUploader = ({id, selectUploader, type}) => {

    const selectCamera = () => {
        selectUploader("CAMERA", null)
    }

    const handleImage = (event) => {
        const files = event.target.files;
        const file = files[0]
        const url = URL.createObjectURL(file);
        selectUploader("GALLERY", url)
    }

    return <div id={id} className="ImageUploader">
        <div className={`element-container ${type}`}>
            <button className="element-box" onClick={selectCamera}>
                <img className="element-image"
                     src={cameraImage}
                     alt="camera"/>
            </button>
            <button className="element-box" style={{ position: "relative" }}>
                <label for="gallery">
                    <img className="element-image"
                         src={galleryImage}
                         alt="gallery"/>
                </label>
                <input
                    id="gallery"
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    capture="environment"
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        display: "none"
                    }}
                />
            </button>
        </div>

    </div>
}

export default ImageUploader;