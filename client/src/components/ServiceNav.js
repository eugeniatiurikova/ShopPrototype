import { NavLink } from "react-router-dom"
import { SERVICE_NAV } from "../service/constants"
import { Filters } from "./Filters"

export const ServiceNav = () => {
    return (<section className="service_nav">
        <div className="container service_nav_inside">
            <details className="service_filter_category">
                <summary className="service_filter_title_up"><span className="service_filter_title_text">filters</span></summary>
                <div className="service_filter_content">
                    {SERVICE_NAV.map(element => {
                        return (<details key={element.name} className="service_filter_item" open>
                            <summary className="service_filter_item_title">{element.name}</summary>
                            <ul className="main_menu_items">
                                {element.items.map(subitem => {
                                    return <li key={subitem} className="main_menu_item sfi_padding"><NavLink to="/catalog"
                                        className="main_menu_link">{subitem}</NavLink></li>
                                })}
                            </ul>
                        </details>)
                    })}
                </div>
            </details>
            <Filters />
        </div>
    </section>)
}