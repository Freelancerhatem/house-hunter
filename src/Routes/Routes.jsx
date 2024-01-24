
import {
    createBrowserRouter
} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/HomePage/Home";
import Signup from "../Pages/Signup/Signup";
import Signin from "../Pages/Signin/Signin";
import RenterDashBoard from "../Pages/DashBoard/RenterDashBoard";
import AdminDashBoard from "../Pages/DashBoard/AdminDashBoard";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'signup',
                element:<Signup></Signup>
            },
            {
                path:'signin',
                element:<Signin></Signin>
            },
            {
                path:'renter',
                element:<RenterDashBoard></RenterDashBoard>
            },
            {
                path:'admin',
                element:<AdminDashBoard></AdminDashBoard>
            },

        ]
    },
]);

export default router;