import { FILTERS } from "../service/constants"

const FiltersItem = ({ title }) => {
    return (<li className="main_menu_item sfip_padding">
        <label htmlFor="trend1">
            <input id={title} className="service_filter_check" type="checkbox" />{title}
        </label></li>)
}

export const Filters = ({ }) => {
    return (<>
        {FILTERS.map(element => {
            return (<details key={element.name} className="service_filter">
                <summary>{element.name}<i className="service_arrow_margin fas fa-chevron-down"></i></summary>
                <div className="service_filter_button_popup">
                    <ul className="main_menu_items">
                        {element.items.map(subitem => {
                            return <FiltersItem key={subitem} title={subitem} />
                        })}
                    </ul>
                </div>
            </details>)
        })}
    </>)
}