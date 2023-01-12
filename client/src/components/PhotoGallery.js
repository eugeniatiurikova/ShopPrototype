import { useState } from "react"
import { SvgArrowLeft } from "./svg/SvgArrowLeft"
import { SvgArrowRight } from "./svg/SvgArrowRight"

export const PhotoGallery = ({ productImg }) => {
    const [current, setCurrent] = useState(1);

    const handleChangePhotoRight = () => {
        if (current === 3) setCurrent(1)
        else setCurrent(current + 1)
    }

    const handleChangePhotoLeft = () => {
        if (current === 1) setCurrent(3)
        else setCurrent(current - 1)
    }

    return (<section className="product_gallery">
        <h2 className="hidden">Product gallery</h2>
        <button onClick={handleChangePhotoLeft} className="product_gallery_button" type="button"><SvgArrowLeft svgClass="product_gallery_arrow" /></button>
        <div className="product_gallery_photo"><img src={`/img/${productImg}-${current}.jpg`} alt="Product view" /></div>
        <button onClick={handleChangePhotoRight} className="product_gallery_button" type="button"><SvgArrowRight svgClass="product_gallery_arrow" /></button>
    </section>)
}