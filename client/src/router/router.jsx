import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../pages/HomePage/HomePage";
import ServicePage from "../pages/ServicePage/ServicePage";
import AboutPage from "../pages/AboutPage/AboutPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/service",
                element: <ServicePage />
            },
            {
                path: "/about",
                element: <AboutPage />
            }
        ]
    },
]);

export default router