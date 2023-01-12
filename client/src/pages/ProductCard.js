import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Cards } from "../components/Cards"
import { InnerHeader } from "../components/InnerHeader"
import { PhotoGallery } from "../components/PhotoGallery"
import { ProductInfo } from "../components/ProductInfo"

export const ProductCard = ({ }) => {
    const { prodId } = useParams();
    const product = useSelector(state => state.allProducts)[prodId - 1];

    return (<>
        <InnerHeader title={"New arrivals"} path={["home", "men"]} />
        <PhotoGallery productImg={product?.img ? product.img : ''} />
        <ProductInfo product={product} />
        <Cards count={3} title="Customers Also Viewed" subtitle="Shop for items based on what we featured in this week" browse />
    </>)
}