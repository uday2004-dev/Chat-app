import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice'
import { useRef } from 'react'


const SendInput = () => {

    const [message, setMessage] = useState("")
    const dispatch=useDispatch()
    const {selectedUser}=useSelector(store=>store.user)
    const {messages}=useSelector(store=>store.message)
    const onSubmit=async (e)=>{
        e.preventDefault()
        // alert(message)
        try {
            axios.defaults.withCredentials=true;
            const res=await axios.post(`http://localhost:3000/api/v1/msg/send/${selectedUser?._id}`,{message},
                
            )
            console.log(res)

            dispatch(setMessages([...messages,res.data.newMsg]))
        } catch (error) {
            console.log(error)
        }
setMessage("")

    }
    return (
        <div className='w-full'>
            <form onSubmit={onSubmit}>

                <div className='w-full relative flex items-center'>

                    <input
                        type="text"
                        value={message}
                        placeholder='Write a message...'
                        className='border border-gray-600 text-sm rounded-full block w-full p-3 pr-20 bg-gray-800 text-white focus:outline-none focus:border-blue-500'
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                        type='submit'
                        className='absolute right-0.5 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-all cursor-pointer'
                    >
                        Send
                    </button>

                </div>

            </form>
        </div>
    )
}

export default SendInput