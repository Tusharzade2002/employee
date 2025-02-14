import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Views/Home/Home';
import Detail from './Views/Detail/Detail';
import UpdateEmploye from './Views/UpdateEmploye/UpdateEmploye';
import AddEmployee from './Views/AddEmploye/AddEmployee'

const root = ReactDOM.createRoot(document.getElementById('root'));
 
const router = createBrowserRouter([
    {
     path:"/",
     element:<Home />
},
{
    path:"/detail/:EmpId",
    element:<Detail />
},
{
    path:"/edit/:EmpId",
    element:<UpdateEmploye />
},
{
     path:"/addemploye",
     element:<AddEmployee/>
}
])

root.render(<RouterProvider router={router}/>);



