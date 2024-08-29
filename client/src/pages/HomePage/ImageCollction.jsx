import img1 from "/image_collection/1.jpg";
import img2 from "/image_collection/2.jpg";
import img3 from "/image_collection/3.jpg";
import img4 from "/image_collection/4.jpg";
import img5 from "/image_collection/5.jpg";
import "./ImageCollction.css"

const ImageCollction = () => {
    return (
        <div className="mt-24">
            <h1 className="lobster-two-bold text-red-500 text-2xl text-center">Best Food for Family</h1>

            <div className="mt-5 flex justify-center items-center gap-5">
                <img className="w-60 h-60 rounded-md" src={img1} alt="image1" />
                <img className="w-60 h-60 rounded-md" src={img2} alt="image1" />
                <img className="w-60 h-60 rounded-md" src={img3} alt="image1" />
                <img className="w-60 h-60 rounded-md" src={img4} alt="image1" />
                <img className="w-60 h-60 rounded-md" src={img5} alt="image1" />
            </div>
        </div>
    );
};

export default ImageCollction;