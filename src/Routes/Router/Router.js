import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import ServiceCard from "../../Pages/Home/Services/ServicesCard";
import Terms from "../../Pages/Home/Terms/Terms";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'/blog',
                    element:<Blog></Blog>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/signup',
                    element:<Register></Register>
                },
                {
                    path:'/terms',
                    element:<Terms></Terms>
                },
                {
                    path:'/services',
                    element:<AllServices></AllServices>,
                    loader:()=>fetch('https://doctor-personal-server-side.vercel.app/services')
                },
                {
                    path:'/services/:id',
                    element:<ServiceDetails></ServiceDetails>,
                    loader:({params})=>fetch(`https://doctor-personal-server-side.vercel.app/services/${params.id}`)
                },
                {
                    path:'/myreviews',
                    element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
                },
                {
                    path:'/addservice',
                    element:<PrivateRoute><AddServices></AddServices></PrivateRoute>
                },
                {
                    path: "/addservice/:service_id",
                    element: <PrivateRoute><AddServices /></PrivateRoute>
                  }
            ]
        }
])
export default router;