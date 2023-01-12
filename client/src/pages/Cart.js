import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { CartItem } from "../components/CartItem"
import { InnerHeader } from "../components/InnerHeader"
import { clearCartWithDB, removeFromCartWithDB } from "../service/database"
import { setCart } from "../store/actions"
import { selectCart } from "../store/selectors"

export const Cart = ({ }) => {
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const total = () => {
        let sum = 0;
        cart?.forEach(element => {
            sum += element.price * element.count
        });
        return sum
    }

    const handleClearCart = async () => {
        let result = await clearCartWithDB();
        if (result.status === 'success') {
            dispatch(setCart([]));
        }
    };

    return (<>
        <InnerHeader title="Shopping cart" path={["home"]} />
        <section className="cart">
            <h2 className="hidden">Items in the cart</h2>
            <div className="cart_inside container">
                <div className="cart_cards_wrap">
                    <ul className="cart_cards">
                        {cart?.map(item => {
                            return <CartItem key={item.id} item={item} />
                        })}
                        {(cart?.length === 0) && <CartItem />}
                    </ul>
                    {(cart?.length !== 0) &&
                        <div className="cart_buttons_wrap">
                            <button className="cart_button" onClick={handleClearCart}>Clear shopping cart</button>
                            <NavLink type="button" className="cart_button" to="/catalog">Continue shopping</NavLink>
                        </div>}
                </div>
                <form action="#" method="post" className="cart_form">
                    <div className="cart_form_fields">
                        <p className="cart_form_title">Shipping address</p>
                        <input type="text" className="cart_form_input" required placeholder="Bangladesh" />
                        <input type="text" className="cart_form_input" required placeholder="State" />
                        <input type="text" className="cart_form_input" required placeholder="Postcode / Zip" />
                        <button type="button" className="cart_button_quote">Get a quote</button>
                    </div>
                    <div className="cart_form_checkout">
                        <div className="cart_prices">
                            <p className="form_sub_total">Sub total<span className="chekout_price">${total()}.00</span></p>
                            <p className="cart_form_title">Grand total<span
                                className="main_red_text chekout_price"><b>${total()}.00</b></span>
                            </p>
                        </div>
                        <button type="submit" className="cart_button_checkout">Proceed a checkout</button>
                    </div>
                </form>
            </div>
        </section>
    </>)
}