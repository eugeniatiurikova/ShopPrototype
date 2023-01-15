import { FEATURES } from "../service/constants"
import { SvgFeatures } from "./svg/SvgFeatures"

export const Feature = () => {
    return (<section className="feature">
        <h2 className="hidden">Company features</h2>
        <ul className="container feature_inside">
            {FEATURES.map(item => {
                return (<li key={item.title} className="feature_card">
                    <div className="feature_image">
                        <SvgFeatures name={item.id} />
                    </div>
                    <h3 className="feature_card_title">{item.title}</h3>
                    <p className="feature_card_text">{item.text}</p>
                </li>)
            })}
        </ul>
    </section>)
}
