import { FILTERS } from "../service/constants"

export const Filters = ({ }) => {
    return (<>
        {FILTERS.map(element => {
            return (<details key={element.name} className="service_filter">
                <summary>{element.name}<i className="service_arrow_margin fas fa-chevron-down"></i></summary>
                <div className="service_filter_button_popup">
                    <ul className="main_menu_items">
                        {element.items.map(subitem => {
                            return <li key={subitem} className="main_menu_item sfip_padding"><label htmlFor="trend1"><input id={subitem}
                                className="service_filter_check" type="checkbox" />{subitem}</label></li>
                        })}
                    </ul>
                </div>
            </details>)
        })}
    </>)
}