import { FEATURES } from "../service/constants"

export const Feature = () => {
    return (<section className="feature">
        <h2 className="hidden">Company features</h2>
        <ul className="container feature_inside">
            {FEATURES.map(item => {
                return (<li key={item.name} className="feature_card">
                    <h3 className="feature_card_title">{item.name}</h3>
                    <p className="feature_card_text">{item.text}</p>
                </li>)
            })}
        </ul>
    </section>)
}
