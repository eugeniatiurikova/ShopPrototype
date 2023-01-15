import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LOGO_TEXT } from "../service/constants";
import { selectCart } from "../store/selectors";
import { CartPopup } from "./CartPopup";
import { MainMenu } from "./MainMenu";
import { SvgBurger } from "./svg/SvgBurger";
import { SvgCart } from "./svg/SvgCart";
import { SvgPerson } from "./svg/SvgPerson";
import { SvgSearch } from "./svg/SvgSearch";

export const Header = () => {
    const cart = useSelector(selectCart);
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const handleClickOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    const handleClickOpenCart = () => {
        setOpenCart(!openCart);
    }

    return (
        <header className="header">
            <h1 className="hidden">Header</h1>
            <div className="container header_inside">
                <div className="header_left">
                    <NavLink to="/" className="header_title_logo" href="/">{LOGO_TEXT}</NavLink>
                    <button className="header_button header_leftborder"><SvgSearch /></button>
                </div>
                <nav className="header_right">
                    <h2 className="hidden">Navigation panel</h2>
                    <button className="header_button" onClick={handleClickOpenMenu}><SvgBurger /></button>
                    <NavLink to="/" className="header_personal"><SvgPerson /></NavLink>
                    <NavLink to="/cart" className="header_cart" onMouseEnter={handleClickOpenCart} onMouseLeave={handleClickOpenCart}><SvgCart />
                        {(cart?.length > 0) && <div className="header_cart_number">{cart.length}</div>}
                    </NavLink>
                    <nav className={`header_main_menue${openMenu ? '' : ' header_main_menue_hidden'}`}><MainMenu /></nav>
                    {(cart?.length > 0) &&
                        <div className={`cart_popup_wrap${openCart ? '' : ' cart_popup_hidden'}`}><CartPopup /></div>}
                </nav>
            </div>

        </header>
    );
}

export default Header;