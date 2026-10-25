import {createBrowserRouter} from "react-router";
import AppLayout from "./components/layout/AppLayout.jsx";
import HomePage from "./pages/Home/page.jsx";
import SingelProduct from "./components/common/Product/SingelProduct.jsx";

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
                element: <SingelProduct />
            }
        ]
    }
])

export default routes