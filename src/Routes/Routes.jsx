import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/ErrorPage/NotFound";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/secret/Secret";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/Dashboard/manageItem/ManageItem";
import UpdateItem from "../pages/Dashboard/updateItem/UpdateItem";
import Payment from "../pages/Dashboard/payment/Payment";
import AdminHome from "../pages/Dashboard/Adminhome/AdminHome";
import Article from "../pages/order/Article/Article";
import ArticleDetails from "../components/ArticleCard/ArticleDetails";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import AddPublisher from "../pages/Dashboard/AddPublisher/AddPublisher";
import MyProfile from "../pages/updateProfile/MyProfile";
import PremiumArticle from "../pages/Premium Article/PremiumArticle";
import PremiumNewsDetails from "../pages/Premium Article/PremiumNewsDetails";
import AddArticle from "../pages/AddArticle/AddArticle";
import MyArticle from "../pages/MyArticle/MyArticle";
import UpdateArticle from "../pages/MyArticle/UpdateArticle";


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
          path:'/PremiumArticle',
          element: <PrivetRoute><PremiumArticle></PremiumArticle></PrivetRoute>
        },
        {
          path:'/myArticle',
          element: <PrivetRoute><MyArticle></MyArticle> </PrivetRoute>
        },
        {
          path:'/addArticle',
          element: <PrivetRoute><AddArticle></AddArticle></PrivetRoute>
        },
        {
          path:'/updateArticle/:id',
          element: <PrivetRoute><UpdateArticle></UpdateArticle></PrivetRoute>
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
          path: '/premiumNews/:id',
          element: <PrivetRoute><PremiumNewsDetails></PremiumNewsDetails></PrivetRoute>,
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
          path:'/myProfile',
          element: <MyProfile></MyProfile>
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

        },
        {
          path:'payment',
          element: <Payment></Payment>

        },
      ]
    },
    {
      path:"dashboard",
      element: <Dashboard></Dashboard>,
      children:[

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
          path:'publisher',
          element:<AdminRoute><AddPublisher></AddPublisher></AdminRoute>
        },
        {
          path:'manageItems',
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path:'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          // loader: ({params}) => fetch(`https://newspaper-server-one.vercel.app/menu/${params.id}`)
          loader:({params}) => fetch(`https://newspaper-server-one.vercel.app/menu/${params.id}`)

        },
        {
          path:'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);