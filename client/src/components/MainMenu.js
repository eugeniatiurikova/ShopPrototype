import { NavLink } from "react-router-dom"
import { RUBRICS } from "../service/constants"
import { SvgCross } from "./svg/SvgCross"

export const MainMenu = () => {
    return (<>
        <div className="main_menu_cross">
            <p className="main_menu_title">Menu</p>
            <div className="main_menu_svg"><SvgCross /></div>
        </div>
        {RUBRICS.map(element => {
            return (<details key={element.name} className="main_menu_popup" open>
                <summary>{element.name}</summary>
                <ul className="main_menu_items">
                    {element.inner.map(subitem => {
                        return <li key={subitem} className="main_menu_item mmi_padding"><NavLink to="/catalog"
                            className="main_menu_link">{subitem}</NavLink></li>
                    })}
                </ul>
            </details>)
        })}
    </>)
}
