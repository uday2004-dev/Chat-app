// import axios from 'axios'
// import React from 'react'
// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'

// const useGetMessages =() => {
//     const {selectedUser}=useSelector(store=>store.user)
//     useEffect(() => {
//         const fecthMsg = async () => {
//             try {
//                 axios.defaults.withCredentials = true
//                 const res = await axios.get(`http://localhost:3000/api/admin/message/${selectedUser?._id}`)
//                 console.log(res)
//             } catch (error) {
//                 console.log(error)
//             }
          
//         }
//           fecthMsg()
//     }, [])

// }

// export default useGetMessages


import axios from 'axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const useGetMessages = () => {

    const { selectedUser } = useSelector(store => store.user)

    useEffect(() => {

        // agar user select nahi hua to return
        if (!selectedUser?._id) return

        const fetchMsg = async () => {
            try {

                axios.defaults.withCredentials = true

                const res = await axios.get(
                    `http://localhost:3000/api/v1/msg/${selectedUser._id}`
                )

                console.log(res)

            } catch (error) {
                console.log(error)
            }
        }

        fetchMsg()

    }, [selectedUser]) // dependency bhi add karo

}

export default useGetMessages