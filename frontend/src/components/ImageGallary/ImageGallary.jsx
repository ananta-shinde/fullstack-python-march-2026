import { useState } from "react";
import "./imagegallary.css"

const ImmageGallary = () => {

    const [currentIndex,setCurrentIndex] = useState(0);

    const images = [
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
        "https://png.pngtree.com/png-vector/20191120/ourmid/pngtree-cosmetic-serum-pipette-bottle-package-png-image_2009766.jpg"
    ]

    return ( 
        <div className="image-gallary-container">
            <img className="preview-image" src={images[currentIndex]} alt="" />
            <div className="thumbnail-list">
                {images.map((img,index)=>(
                    <img className="thumbnail" src={img} alt="" onClick={()=>setCurrentIndex(index)} />
                ))}
            </div>
        </div>
     );
}
 
export default ImmageGallary;