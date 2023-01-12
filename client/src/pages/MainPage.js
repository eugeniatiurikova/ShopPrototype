import { useSelector } from "react-redux";
import { Cards } from "../components/Cards"
import { Categories } from "../components/Categoties"
import { Promo } from "../components/Promo"
import { LOGO_TEXT } from "../service/constants";
import { selectAllProducts } from "../store/selectors";

export const MainPage = ({ }) => {
    const prodCount = useSelector(selectAllProducts).length;

    return (<>
        <Promo title={LOGO_TEXT} subtitle="of luxurieous" highlightedSubtitlePart="fashion" />
        <Categories />
        <Cards count={(prodCount > 6) ? 6 : prodCount} title="Featured Items" subtitle="Shop for items based on what we featured in this week" browse />
    </>)
}
