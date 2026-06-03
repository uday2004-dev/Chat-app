// import React, { useState } from 'react'
// import { FaSearch } from "react-icons/fa";
// import OtherUsers from './OtherUsers';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const SideBar = () => {
//     const [search, setSearch] = useState("")
//     const {OtherUsers}=useSelector(store=>store.user)


//     const searchSubmit=(e)=>{
//         e.preventDefault()
//         // alert(search)
//         // const otherUsers=
       
//        const conversationUser=otherUsers?.find((user)=>user.fullName.toLowerCase().includes(search.toLowerCase()))
//         setSearch("")
//     }
//     const navigate = useNavigate()

//     const logOut = async () => {
//         try {
//             axios.defaults.withCredentials = true
//             const logOutRes = await axios.get("http://localhost:3000/api/v1/user/logout")
//             navigate("/login")
//         } catch (error) {
//             console.log(error)
//         }

//     }
//     return (
//         <div className='w-full h-full p-4 flex flex-col'>
//             {/* Search Form */}
//             <form onSubmit={searchSubmit} className='flex items-center gap-2'>
//                 <input
//                     type="text"
//                     value={search}
//                     placeholder='Search users...'
//                     className='input input-bordered w-full rounded-full bg-gray-800 text-white placeholder-gray-400 border-none focus:outline-none'
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//                 <button
//                     type='submit'
//                     className='btn btn-circle bg-blue-500 border-none hover:bg-blue-600 text-white'
//                 >
//                     <FaSearch size={16} />
//                 </button>
//             </form>

//             {/* Divider */}
//             <div className="border-t border-gray-700 my-4"></div>

//             {/* Users */}
//             <div className='flex-1 overflow-hidden'>
//                 <OtherUsers />

//             </div>




//             {/* <button className="btn btn-active">Default</button> */}
//             <div className='mt-auto pt-4'>
//                 <button className="btn btn-active w-full" onClick={logOut}>
//                     Logout
//                 </button>
//             </div>



//         </div>
//     )
// }

// export default SideBar



import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

    const [search, setSearch] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { otherUsers } = useSelector(store => store.user)

    const searchSubmit = (e) => {
        e.preventDefault()

        const conversationUser = otherUsers?.find((user) =>
            user.fullName.toLowerCase().includes(search.toLowerCase())
        )

        if (conversationUser) {
            dispatch(setSelectedUser(conversationUser))
        } else {
            toast.error("User not found")
        }

        setSearch("")
    }

    const logOut = async () => {
        try {

            axios.defaults.withCredentials = true

            await axios.get("http://localhost:3000/api/v1/user/logout")

            toast.success("Logout successfully")

            navigate("/login")

        } catch (error) {
            console.log(error)
            toast.error("Logout failed")
        }
    }

    return (
        <div className='w-full h-full p-4 flex flex-col'>

            {/* Search Form */}
            <form
                onSubmit={searchSubmit}
                className='flex items-center gap-2'
            >
                <input
                    type="text"
                    value={search}
                    placeholder='Search users...'
                    className='input input-bordered w-full rounded-full bg-gray-800 text-white placeholder-gray-400 border-none focus:outline-none'
                    onChange={(e) => setSearch(e.target.value)}
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
            <div className='flex-1 overflow-y-auto'>
                <OtherUsers />
            </div>

            {/* Logout */}
            <div className='mt-auto pt-4'>
                <button
                    className="btn btn-active w-full"
                    onClick={logOut}
                >
                    Logout
                </button>
            </div>

        </div>
    )
}

export default SideBar