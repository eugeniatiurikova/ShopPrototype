import { NavLink } from "react-router-dom"

export const InnerHeader = ({ title, path }) => {
    return (<section className="promo promo_inner">
        <h2 className="hidden">Title and breadcrumbles</h2>
        <div className="container inner_page_top">
            <h2 className="inner_page_title">{title}</h2>
            <p className="status_string">
                {path?.map(item => {
                    return <span key={item}><NavLink to="/catalog" className="status_string no_line">{item}</NavLink> / </span>
                })}<span className="status_string status_last">{title}</span></p>
        </div>
    </section>)
}
