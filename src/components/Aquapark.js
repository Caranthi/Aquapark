import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import '../styles/Aquapark.css';
import Main from "./pages/Main";

const Aquapark = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main/>
        }
    ]);

    return (
        <div className="Aquapark">
            <RouterProvider router={router}/>
        </div>
    );
}

export default Aquapark;
