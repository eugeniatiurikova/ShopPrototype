import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { selectCart } from "../store/selectors";

export const CartPopup = () => {
    const cart = useSelector(selectCart);

    const total = () => {
        let sum = 0;
        cart?.forEach(element => {
            sum += element.price * element.count
        });
        return sum
    }

    return (<>
        <table>
            <thead>
                <tr><th>Name</th><th>Count</th><th>Price</th></tr>
            </thead>
            <tbody>
                {cart?.map(item => {
                    return (<tr key={item.id} className="tblborder"><td>{item.title}</td><td>{item.count}</td><td>${item.price}.00</td></tr>)
                })}

            </tbody>
        </table>
        <div className="cart_popup_buttons_wrap">
            <p className="cart_form_title">Total<span
                className="main_red_text chekout_price"><b>${total()}.00</b></span>
            </p>
        </div>
    </>)
}
{/* <Link to="/cart"><button className="cart_button_quote">Go to cart</button></Link> */ }