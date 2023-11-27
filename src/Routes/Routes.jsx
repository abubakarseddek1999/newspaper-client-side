import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/menu/Menu";
import Login from "../pages/Login/Login";
import NotFound from "../pages/ErrorPage/NotFound";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/secret/Secret";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/Dashboard/manageItem/ManageItem";
import UpdateItem from "../pages/Dashboard/updateItem/UpdateItem";
import Payment from "../pages/Dashboard/payment/Payment";
import PaymentHistory from "../pages/Dashboard/paymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/Adminhome/AdminHome";
import Article from "../pages/order/Article/Article";
import ArticleDetails from "../components/ArticleCard/ArticleDetails";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<NotFound></NotFound>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/menu',
          element: <Menu></Menu>
        },
        {
          path:'/Article/:category',
          element:<PrivetRoute><Article></Article></PrivetRoute>
        },
        {
          path: '/details/:id',
          element: <PrivetRoute><ArticleDetails></ArticleDetails></PrivetRoute>,
          // loader:({params})=> fetch(`https://computer-engineer-server.vercel.app/services/${params.id}`)
        },
        {
          path:'/Article',
          element:<Article></Article>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/updateProfile',
          element: <UpdateProfile></UpdateProfile>
        },
        {
          path:'/signUp',
          element: <SignUp></SignUp>
        }
        ,
        {
          path:'/secret',
          element: <PrivetRoute><Secret></Secret></PrivetRoute>

        }
      ]
    },
    {
      path:"dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        // normal user routes
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },

        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'payment',
          element: <Payment></Payment>

        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>

        },
        // admin only routes
        {
          path:'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'addItems',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageItems',
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path:'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          // loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
          loader:({params}) => fetch(`http://localhost:5000/menu/${params.id}`)

        },
        {
          path:'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);