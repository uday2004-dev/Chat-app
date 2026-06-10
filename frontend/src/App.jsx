import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home"
// import Register from "./components/Register"
import Register from './components/register'
import Login from "./components/Login"
import { useDispatch, useSelector } from 'react-redux'
import io from "socket.io-client"
import { setSocket } from './redux/socketSilce'
import { setOnlineUsers } from './redux/userSlice'
import { Socket } from 'socket.io-client'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  }

])

const App = () => {


  const { authUser } = useSelector(store => store.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!authUser) return;

    const socket = io("http://localhost:3000", {
      query: {
        userId: authUser._id
      }
    });

    dispatch(setSocket(socket));

    socket.on("getOnlineUsers", (onlineUsers) => {
      dispatch(setOnlineUsers(onlineUsers));
    });

    return () => {
      socket.close();
    };  
  }, [authUser, dispatch]);

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App