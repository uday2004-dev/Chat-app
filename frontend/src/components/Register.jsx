import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 cursor-pointer w-full max-w-md p-6 rounded-lg shadow-md bg-white/10 backdrop-blur-md border border-white/20'>
        <h1 className='text-3xl font-bold text-center text-gray-300  '>Register</h1>
        <form action="">
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Full Name</span>
            </label>
            <input type="text" placeholder='Enter Your Name' className=' w-full input input-border h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> User Name</span>
            </label>
            <input type="text" placeholder='Enter Your User Name' className=' w-full input input-border h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Password</span>
            </label>
            <input type="text" placeholder='Enter Your Password' className=' w-full input input-border h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'> Confirm Password</span>
            </label>
            <input type="text" placeholder='Confirm your Password' className=' w-full input input-border h-10' />
          </div>


          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input type="checkbox" defaultChecked className="checkbox checkbox-neutral mx-2" />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input type="checkbox" defaultChecked className="checkbox checkbox-neutral mx-2" />
            </div>
          </div>
          <div className="text-center flex items-center">
            <p>
              Already have an account?
            </p>
            <Link  to="/login">
             Login
            </Link>
          </div>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Register </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Register