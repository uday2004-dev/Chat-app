import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useDispatch } from "react-redux"
import { setOtherUsers } from '../redux/userSlice'
const useGetOtherUsers = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true
                const res = await axios.get("http://localhost:3000/api/v1/user/")
                console.log(res)
                //store
                dispatch(setOtherUsers(res.data)) //yahan glti thi ok kaise
            } catch (error) {
                console.log(error)
            }

        }
        fetchOtherUsers()
    }, [])
}

export default useGetOtherUsers




//saare user ka data fetch krne mai dikkat ho rhi hai