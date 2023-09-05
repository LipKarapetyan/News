import React from "react";

import { createBrowserRouter,RouterProvider } from "react-router-dom";

import Layout from "./ALlComponenets/Layout";
import Basket from "./Basket";
import App from "./App";
import Serch from "./ALlComponenets/Serch";


const router = createBrowserRouter([

    {
        path:'/',
        element:<Layout />,
        children:[
            {
                path:"/",
                element:<App/>
               
                 
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"serch",
                element:<Serch/>
            }
        ]

    }
])

function Home() {
    return(
        <div>
            <RouterProvider router={router}/>
            
        </div>
    )
}

export default Home