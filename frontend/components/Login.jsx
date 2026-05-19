import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState({

    userName: "",
    password: "",

  })

  const onSubmit = (e) => {
    e.preventDefault()
    setUser({

      userName: "",
      password: "",
    })
    console.log(user)
  }


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-white/10 bg-clip-padding backdrop-blur-sm border border-white/20'>
        <h1 className='text-3xl font-bold text-center text-gray-800'>Login</h1>
        <form action="" onSubmit={onSubmit}>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text'>User Name </span>
            </label>
            <input className='w-full input input-border h-10'value={user.userName} onChange={(e)=>setUser({...user,userName:e.target.value})} type="text" placeholder='User Name' />
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label-text'>Password </span>
            </label>
            <input className='w-full input input-border h-10'value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} type="password" placeholder='Password' />
          </div>



          <div className='flex items-center justify-center gap-3 m-5  '>
            <p className='cursor-pointer'>Don't have an account?</p>

            <Link to='/register'>
              <button className='cursor-pointer hover:text-black border border-[1px] rounded-[10px] px-2'>
                Register
              </button>
            </Link>
          </div>
          <div>
            <button className='btn btn-block btn-sm mt-2 border-slate-700 btn btn-soft btn-primary text-white rounded-[20px]'> Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login