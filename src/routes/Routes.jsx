import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Categories from "../pages/Home/Categories/Categories";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsAndCondition from "../pages/TermsAndCondition/TermsAndCondition";



const router = createBrowserRouter([

    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
            path:'/',
            element:<Navigate to={'/categorie/0'}></Navigate>,

            },

            {
                path:'/login',
                element:<Login></Login>,
            },
            
            {
                path:'/register',
                element:<Register></Register>
            },

            {
                path:'/terms',
                element:<TermsAndCondition></TermsAndCondition>
            }

        ]
    },


    {
        path:'/categorie',
        element:<Main></Main>,
        children:[
            {
                path:'/categorie/:id',
                element:<Categories></Categories>,
                loader:({params})=>{ return fetch(`https://the-news-dragon-server-mplkzlzdp-minhaz666.vercel.app/categories/${params.id}`)}
            },


        ]
    },
    {

        path:'/news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:'/news/:id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=>{return fetch(`https://the-news-dragon-server-mplkzlzdp-minhaz666.vercel.app/news/${params.id}`)}
            }
        ]

    }


])

export default router;