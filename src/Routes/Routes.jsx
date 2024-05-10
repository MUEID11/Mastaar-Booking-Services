import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login"
import Register from "../Pages/Authentication/Register"
import Error from "../Pages/Error";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {
                index:true,
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])
export default router;