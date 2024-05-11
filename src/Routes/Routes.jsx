import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login"
import Register from "../Pages/Authentication/Register"
import Error from "../Pages/Error";
import AddService from "../Pages/AddService";
import PrivateRoute from "./PrivateRoute";
import BookService from "../Pages/BookService";
import ManageService from "../Pages/ManageService";
import TodoService from "../Pages/TodoService";
import AllServices from "../Pages/AllServices";
const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement: <Error/>,
        children: [
            {
                index:true,
                element: <Home/>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/all',
                element: <AllServices/>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/alljobs`)
            },
            {
                path:'/add',
                element: <PrivateRoute><AddService/></PrivateRoute>
            },
            {
                path: '/book',
                element: <PrivateRoute><BookService/></PrivateRoute>
            },
            {
                path:"/manage",
                element: <PrivateRoute><ManageService/></PrivateRoute>
            },
            {
                path:'todo',
                element: <PrivateRoute><TodoService/></PrivateRoute>
            }
        ]
    }
])
export default router;