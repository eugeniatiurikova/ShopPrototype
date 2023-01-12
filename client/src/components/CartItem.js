import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"
import { addToCartWithDB, deleteFromCartWithDB, removeFromCartWithDB } from "../service/database";
import { changeCountInCart, removeFromCart } from "../store/actions";
import { SvgCross } from "./svg/SvgCross"

export const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(item?.count);

    const handleChangeCount = async (e) => {
        let newVal = e.target.value;
        setValue(newVal);
        let result = false;
        if (item.count < newVal) {
            result = await addToCartWithDB(item.id);
        }
        if (item.count > newVal) {
            result = await deleteFromCartWithDB(item.id);
        }
        if (result?.status === 'success') {
            dispatch(changeCountInCart(item.id, parseInt(newVal)))
        };
    };

    const handleRemoveFromCart = async () => {
        let result = await removeFromCartWithDB(item.id);
        if (result.status === 'success') {
            dispatch(removeFromCart(item.id));
        };
    };

    if (item)
        return (<li className="cart_item">
            <img className="cart_image" src={`img/${item.img}.jpg`} alt={item.title} /><div className="cart_item_info">
                <p className="cart_item_title"><NavLink to={`/product/${item.id}`}>{item.title}</NavLink></p>
                <p className="cart_item_descript">Price: <span className="main_red_text">${item.price}.00</span></p>
                <p className="cart_item_descript">Color: Red</p>
                <p className="cart_item_descript">Size: Xl</p>
                <p className="cart_item_descript">Quantity: <input
                    className="cart_item_quantity"
                    type="number"
                    min="1"
                    value={value}
                    onChange={handleChangeCount}
                /></p>
            </div>
            <button onClick={handleRemoveFromCart} className="cart_svg main_menu_svg"><SvgCross /></button>
        </li>)

    else return (<li className="cart_item">
        <img className="cart_image" src="/img/product-0.png" width="360px" height="420px" alt="No products" /><div className="cart_item_info">
            <p className="cart_item_title"><NavLink to="/catalog">Cart is empty</NavLink></p>
            <p className="cart_item_descript">Add products to your cart:</p>
            <p className="cart_item_descript"><NavLink to="/catalog"><span className="main_red_text">Browse catalog</span></NavLink></p>
        </div>
    </li>)
}