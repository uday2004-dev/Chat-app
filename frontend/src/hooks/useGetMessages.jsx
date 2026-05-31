import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const useGetMessages =() => {
    useEffect(() => {
        const fecthMsg = async () => {
            try {
                axios.defaults.withCredentials = true
                const res = await axios.get(`http://localhost:3000/api/admin/message/`)
            } catch (error) {
                console.log(error)
            }
          
        }
          fecthMsg()
    }, [])

}

export default useGetMessages