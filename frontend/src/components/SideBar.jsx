import React from 'react'
import { FaSearch } from "react-icons/fa";
import OtherUsers from './OtherUsers';

const SideBar = () => {
    return (
        <div className='w-full h-full p-4 flex flex-col'>

            {/* Search Form */}
            <form className='flex items-center gap-2'>

                <input
                    type="text"
                    placeholder='Search users...'
                    className='input input-bordered w-full rounded-full bg-gray-800 text-white placeholder-gray-400 border-none focus:outline-none'
                />
                <button
                    type='submit'
                    className='btn btn-circle bg-blue-500 border-none hover:bg-blue-600 text-white'
                >
                    <FaSearch size={16} />
                </button>
            </form>

            {/* Divider */}
            <div className="border-t border-gray-700 my-4"></div>

            {/* Users */}
              <div className='flex-1 overflow-hidden'>
                <OtherUsers />

            </div>
             
         

            
                {/* <button className="btn btn-active">Default</button> */}
                <div className='mt-auto pt-4'>
                    <button className="btn btn-active w-full">
                        Logout
                    </button>
                </div>
       


        </div>
    )
}

export default SideBar