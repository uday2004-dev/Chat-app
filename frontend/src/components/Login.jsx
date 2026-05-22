import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  })
    const navigate = useNavigate()
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/api/v1/user/login", user, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      });
      console.log(res.data)
      if (res.data.success) {
        navigate("/login")
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error.response)
    }
    setUser({

      userName: "",
      password: "",
    })
    console.log(user)
  }
  return (
    <div className='flex justify-center items-center min-h-screen px-4'>

      <div className='w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20'>

        <h1 className='text-4xl font-bold text-center text-white mb-6'>
          Login
        </h1>

        <form className='space-y-4' onSubmit={onSubmitHandler}>

          <div>
            <label className='label'>
              <span className='label-text text-white'>
                User Name
              </span>
            </label>

            <input
              type="text"
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              placeholder='Enter Your User Name'
              className='w-full input input-bordered h-12 bg-white/20 text-white placeholder:text-gray-300'
            />
          </div>

          <div>
            <label className='label'>
              <span className='label-text text-white'>
                Password
              </span>
            </label>

            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder='Enter Your Password'
              className='w-full input input-bordered h-12 bg-white/20 text-white placeholder:text-gray-300'
            />
          </div>

          <div className='flex items-center gap-2 text-sm mt-2 text-white'>
            <p>Don't have an account?</p>

            <Link
              to="/register"
              className='text-blue-300 hover:underline'
            >
              Register
            </Link>
          </div>

          <button type='submit' className='btn btn-block btn-primary mt-4'>
            Login
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login