import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Landing.jsx'
import Login from './Login/Login.jsx'
import Forgot from './Login/Forgotpwd.jsx'
import Register from './Register/Register.jsx'
import Dashboard from './Dashboard/App.jsx'
import Send from './Sends/Send.jsx'
import Received from './Received/Received.jsx'
import Upload from './Upload/Upload.jsx'
// import Test from './Register/Newuser.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router =createBrowserRouter([
  {
    path:'/',
    element:<App />,
  },
  {
    path:'/Register',
    element: <Register />,
  },
  {
    path:"/Login",
    element:<Login />,
  },
  {
    path:"/Password",
    element:<Forgot />,
  },
  {
    path:"/Dashboard",
    element:<Dashboard />,
  },
  {
    path:'/send',
    element:<Send />,
  },
  {
    path:'/received',
    element:<Received />,
  },
  {
    path:'/upload',
    element:<Upload />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
