import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux"
import { Feature } from "../components/Feature"
import { Feedback } from "../components/Feedback"
import { Footer } from "../components/Footer"
import Header from "../components/Header"
import { setAllProducts, setCart } from "../store/actions"
import { Cart } from "./Cart"
import { Catalog } from "./Catalog"
import { MainPage } from "./MainPage"
import { ProductCard } from "./ProductCard"
import { initCartData, initProductsData } from "../service/database";

export const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const json = await initProductsData();
            dispatch(setAllProducts(json.products));

            const jsonCart = await initCartData();
            dispatch(setCart(jsonCart.products));
        }
        fetchData()
            .catch(console.error);
    }, [])

    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/" element={<ProductCard />}>
                        <Route path=":prodId" element={<ProductCard />} />
                    </Route>
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<MainPage />} replace />
                </Routes>
            </main>
            <Feature />
            <Feedback />
            <Footer />
        </BrowserRouter>
    )
}
