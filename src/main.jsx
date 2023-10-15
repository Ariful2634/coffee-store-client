import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Main from './Components/Main';
import AddCoffee from './Components/AddCoffee';
import UpdateCoffee from './Components/UpdateCoffee';

import Main from './Components/Main';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import AuthProvider from './Provider/AuthProvider';
import Users from './Components/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader:()=>fetch("http://localhost:5000/coffee")
  },
 
      {
        path:'addCoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'updateCoffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
      },{
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/signin',
        element:<SignIn></SignIn>
      },
      {
        path:'/users',
        element:<Users></Users>,
        loader:()=>fetch("http://localhost:5000/user")
      }


]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
   <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
