import { useSelector } from "react-redux";
import { Cards } from "../components/Cards"
import { InnerHeader } from "../components/InnerHeader"
import { ServiceNav } from "../components/ServiceNav"
import { selectAllProducts } from "../store/selectors";

export const Catalog = ({ }) => {
    const prodCount = useSelector(selectAllProducts).length;

    return (<>
        <InnerHeader title={"New arrivals"} path={["home", "men"]} />
        <ServiceNav />
        <Cards count={prodCount - (prodCount % 3)} pagination />
    </>)
}
