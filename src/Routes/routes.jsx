import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import LogIn from "../Pages/LogIn";
import Registration from "../Pages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/LogIn',
            element: <LogIn></LogIn>
        },
        {
            path: '/Registration',
            element: <Registration></Registration>
        }
    ]
  },
]);