import { useState } from "react";
import "./imagegallary.css"
import ImageSlider from "./ImageSlider";

const ImmageGallary = () => {

    const [currentIndex,setCurrentIndex] = useState(0);

    const images = [
        "https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_1.jpg",
        "https://png.pngtree.com/png-vector/20191120/ourmid/pngtree-cosmetic-serum-pipette-bottle-package-png-image_2009766.jpg",
        "https://png.pngtree.com/png-vector/20191120/ourmid/pngtree-cosmetic-serum-pipette-bottle-package-png-image_2009766.jpg",
        "https://png.pngtree.com/png-vector/20191120/ourmid/pngtree-cosmetic-serum-pipette-bottle-package-png-image_2009766.jpg",
        "https://png.pngtree.com/png-vector/20191120/ourmid/pngtree-cosmetic-serum-pipette-bottle-package-png-image_2009766.jpg",
        "https://png.pngtree.com/png-vector/20191120/ourmid/pngtree-cosmetic-serum-pipette-bottle-package-png-image_2009766.jpg",
    ]

    return ( 
        <div className="image-gallary-container">
            <img className="preview-image" src={images[currentIndex]} alt="" />
            <ImageSlider images={images} setCurrentIndex={setCurrentIndex}/>
        </div>
     );
}
 
export default ImmageGallary;