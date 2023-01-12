import { NavLink } from "react-router-dom";

export const Categories = () => {
    return (<section className="categories">
        <h2 className="hidden">Categories of products</h2>
        <div className="container categories_cards">
            <NavLink to="/catalog" className="no_line">
                <div className="categories_card categories_card_woman">
                    <p><span className="categories_rate">30% off</span><br />
                        <span className="categories_name">for women</span>
                    </p>
                </div>
            </NavLink>
            <NavLink to="/catalog" className="no_line">
                <div className="categories_card categories_card_men">
                    <p className="categories_rate">hot deal</p>
                    <p className="categories_name">for men</p>
                </div>
            </NavLink>
            <NavLink to="/catalog" className="no_line">
                <div className="categories_card categories_card_kids">
                    <p className="categories_rate">new arrivals</p>
                    <p className="categories_name">for kids</p>
                </div>
            </NavLink>
            <NavLink to="/catalog" className="no_line">
                <div className="categories_card categories_card_accesories">
                    <p className="categories_rate">luxurious & trendy</p>
                    <p className="categories_name">accessories</p>
                </div>
            </NavLink>

        </div>
    </section>)
};
