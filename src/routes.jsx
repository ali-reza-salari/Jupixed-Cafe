import {createBrowserRouter} from "react-router";
import AppLayout from "./components/layout/AppLayout.jsx";
import HomePage from "./pages/Home/page.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
])

export default routes