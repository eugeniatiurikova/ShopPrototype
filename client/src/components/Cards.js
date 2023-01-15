import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Card } from "./Card"
import { Pagination } from "./Pagination";

export const Cards = ({ count, title, subtitle, browse, pagination }) => {
    const products = useSelector(state => state.allProducts).slice(0, count);

    return (<section className="products">
        <h2 className="hidden">Products</h2>
        {title && subtitle &&
            <div className="container">
                <h2 className="products_title">{title}</h2>
                <p className="products_info">{subtitle}</p>
            </div>
        }
        <div className="container">
            <ul className="products_inside">
                {products?.map(prod => {
                    return <Card key={prod.id} prod={prod} />
                })}
            </ul>
            {browse && <div className="center"><NavLink to="/catalog" className="product_link no_line">Browse All Products</NavLink></div>}
            {pagination && <Pagination visFirst={1} visCount={6} active={1} max={20} />}
        </div>
    </section>)
}
