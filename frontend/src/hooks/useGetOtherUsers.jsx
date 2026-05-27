import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useDispatch } from "react-redux"
import { setOtherUsers } from '../redux/userSlice'
const useGetOtherUsers = () => {


    const dispatch = useDispatch()

    const fetchOtherUsers = async () => {
        try {
            axios.defaults.withCredentials = true
            const res = await axios.get("http://localhost:3000/api/v1/user/")
            console.log(res)
            dispatch(setOtherUsers(res.data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchOtherUsers()
    }, [])
    return (
        <div>

        </div>
    )
}

export default useGetOtherUsers




//saare user ka data fetch krne mai dikkat ho rhi hai