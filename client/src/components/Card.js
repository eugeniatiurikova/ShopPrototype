import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../store/actions";
import { SvgAdd } from "./svg/SvgAdd"
import { addToCartWithDB } from "../service/database";

export const Card = ({ prod }) => {
    const dispatch = useDispatch();

    const handleAddToCart = async () => {
        let result = await addToCartWithDB(prod.id);
        if (result.status === 'success') {
            let newProd = { ...prod, prod_id: prod.id, count: 1 }
            dispatch(addToCart(newProd));
        };
    };

    return (
        <li className="product_card">
            <div className="product_card_hover"><button className="product_add" onClick={handleAddToCart}><SvgAdd svgClass="product_margin_right product_card_img" /> Add to cart</button>
            </div>
            <img src={`/img/${prod.img}.jpg`} alt="Product" />
            <div className="product_info"><NavLink to={`/product/${prod.id}`}>
                <p className="product_name">{prod.title}</p>
                <p className="product_description">{prod.description}</p>
            </NavLink>
            </div>
            <p className="product_price">${prod.price}.00</p>
        </li>
    )
}
