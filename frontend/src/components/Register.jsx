import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import toast from 'react-hot-toast'

const Register = () => {

  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })
  const navigate = useNavigate()
  const gender = (gender) => {
    setUser({ ...user, gender })
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:3000/api/v1/user/register", user, {
        headers: {
          'Content-Type': "application/json"
        },
        withCredentials: true
      });
      console.log(res.data)
      // if (res.data.success) {
      //   toast.success(res.data.message)
      // }
      navigate("/")
    } catch (error) {

      console.log(error.response)
      console.log(error.response.data)

    }
    setUser({
      fullName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      gender: ""
    })
    console.log(user)
  }
  return (
    <div className='flex justify-center items-center min-h-screen px-4'>
      <div className='w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20'>
        <h1 className='text-4xl font-bold text-center text-white mb-6'>
          Register
        </h1>

        <form className='space-y-4' onSubmit={onSubmitHandler}>

          <div>
            <label className='label'>
              <span className='label-text text-white'>
                Full Name
              </span>
            </label>

            <input
              type="text"
              placeholder='Enter Your Name'
              className='w-full input input-bordered h-12 bg-white/20 text-white placeholder:text-gray-300'
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className='label'>
              <span className='label-text text-white'>
                User Name
              </span>
            </label>

            <input
              type="text"
              placeholder='Enter Your User Name'
              className='w-full input input-bordered h-12 bg-white/20 text-white placeholder:text-gray-300'
              value={user.userName}
              onChange={(e) =>
                setUser({ ...user, userName: e.target.value })
              }
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
              placeholder='Enter Your Password'
              className='w-full input input-bordered h-12 bg-white/20 text-white placeholder:text-gray-300'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <div>
            <label className='label'>
              <span className='label-text text-white'>
                Confirm Password
              </span>
            </label>

            <input
              type="password"
              placeholder='Confirm Your Password'
              className='w-full input input-bordered h-12 bg-white/20 text-white placeholder:text-gray-300'
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
            />
          </div>

          <div className='flex items-center gap-6 pt-2 text-white'>

            <div className='flex items-center gap-2'>
              <p>Male</p>

              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={user.gender === "male"}
                onChange={() => gender("male")}

              />
            </div>

            <div className='flex items-center gap-2'>
              <p>Female</p>

              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={user.gender === "female"}
                onChange={() => gender("female")}
              />
            </div>

          </div>

          <div className="flex items-center gap-2 text-sm text-white pt-2">
            <p>Already have an account?</p>

            <Link
              to="/login"
              className='text-blue-300 hover:underline'
            >
              Login
            </Link>
          </div>

          <button className='btn btn-primary btn-block mt-4' type='submit'>
            Register
          </button>

        </form>
      </div>

    </div>
  )
}

export default Register