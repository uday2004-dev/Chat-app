import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../redux/messageSlice'
import store from '../redux/store'

const useGetRealTimeMessage = () => {
    const { socket } = useSelector(store => store)
    const { messages } = useSelector(store => store)
    const dispatch = useDispatch()
    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            dispatch(setMessages([...messages,newMessage]))
        })
    }, [socket ,setMessages,messages])
}

export default useGetRealTimeMessage