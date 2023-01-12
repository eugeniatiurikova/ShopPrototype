import { useDispatch } from "react-redux";
import { addToCartWithDB } from "../service/database";
import { setCart } from "../store/actions";
import { Filters } from "./Filters"
import { SvgAdd } from "./svg/SvgAdd"

export const ProductInfo = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = async () => {
        let result = await addToCartWithDB(product.id);
        if (result.status === 'success') {
            dispatch(setCart(result.products));
        };
    };

    return (<section className="product_zoom">
        <h2 className="hidden">Product description</h2>
        <div className="product_zoom_info">
            <p className="product_zoom_category_title">WOMEN COLLECTION</p>
            <div className="product_zoom_divider"></div>
            <h3 className="product_zoom_title">{product?.title}</h3>
            <p className="product_zoom_description">{product?.description}</p>
            <p className="product_zoom_price">${product?.price}.00</p>
            <div className="product_zoom_divider_long"></div>

            <section className="service_nav">
                <div className="container service_nav_inside service_centered"><Filters /></div>
            </section>

            <button className="product_zoom_link no_line" onClick={handleAddToCart}>
                <SvgAdd svgClass="product_card_svg product_margin_right" /> Add to cart</button>
        </div>
    </section>)
}