import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from "./components/Home"
// import Register from "./components/Register"
import Register from './components/register'
import Login from "./components/Login"



const router=createBrowserRouter([
{
  path:"/",
  element:<Home/>
},
{
  path:"/register",
  element:<Register/>
},
{
  path:"/login",
  element:<Login/>
}

])

const App = () => {
  return (
    <>
   


    <div className='p-4 h-screen flex items-center justify-center'>
       <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App