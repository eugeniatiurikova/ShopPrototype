import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LOGO_TEXT } from "../service/constants";
import { selectCart } from "../store/selectors";
import { MainMenu } from "./MainMenu";
import { SvgBurger } from "./svg/SvgBurger";
import { SvgCart } from "./svg/SvgCart";
import { SvgPerson } from "./svg/SvgPerson";
import { SvgSearch } from "./svg/SvgSearch";

export const Header = () => {
    const cart = useSelector(selectCart);
    const [open, setOpen] = useState(false);

    const handleClickOpenMenu = () => {
        setOpen(!open);
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
                    <NavLink to="/"><SvgPerson /></NavLink>
                    <NavLink to="/cart" className="header_cart"><SvgCart />
                        {(cart?.length > 0) && <div className="header_cart_number">{cart.length}</div>}
                    </NavLink>
                    <nav className={`header_main_menue ${open ? '' : 'header_main_menue_hidden'}`}><MainMenu /></nav>
                </nav>
            </div>

        </header>
    );
}

export default Header;