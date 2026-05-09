import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='w-full max-w-md p-6 rounded-lg shadow-md bg-white/10 bg-clip-padding backdrop-blur-sm border border-white/20'>
        <h1 className='text-3xl font-bold text-center text-gray-800'>Register</h1>
        <form action="">
          <div>
            <label className='label p-2 '>
              <span className='text-base label-text'>Full Name </span>
            </label>
            <input className='w-full input input-border h-10' type="text" placeholder='Name' />
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label-text'>User Name </span>
            </label>
            <input className='w-full input input-border h-10' type="text" placeholder='User Name' />
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label-text'>Password </span>
            </label>
            <input className='w-full input input-border h-10' type="text" placeholder='Password' />
          </div>
          <div>
            <label className='label p-2 '>
              <span className='text-base label-text'>Confirm Password </span>
            </label>
            <input className='w-full input input-border h-10' type="text" placeholder='Confirm Password' />
          </div>
          <div className='flex items-center my-4'>
            <div className='flex items-center '>
              <p>Male: </p>
              <input type="checkbox" defaultChecked className="checkbox m-2" />
            </div>

            <div className='flex items-center '>
              <p>Female: </p>
              <input type="checkbox" defaultChecked className="checkbox m-2" />
            </div>
          </div>

          <div className='flex items-center text-center  gap-3'>
            <p className='cursor-pointer'>Already have an account?</p>
            <Link to='/login'>
             <button className='cursor-pointer hover:text-black border border-[1px] rounded-[10px] px-2'>Register</button>
            </Link>
          </div>

          <div>
            <button className='btn btn-block btn-sm mt-2 border-slate-700 btn btn-soft btn-primary text-white rounded-[20px]'> Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register