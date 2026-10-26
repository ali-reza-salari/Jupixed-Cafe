import {createBrowserRouter} from "react-router";
import AppLayout from "./components/layout/AppLayout.jsx";
import HomePage from "./pages/Home/page.jsx";
import SingleProduct from "./components/common/Product/SingleProduct.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "product/:productTitle",
                element: <SingleProduct />
            }
        ]
    }
])

export default routes