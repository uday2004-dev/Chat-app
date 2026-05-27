import React from 'react'
import SingleUser from './SingleUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'
import { useSelector } from 'react-redux'

const OtherUsers = () => {

    useGetOtherUsers()

    const { otherUsers } = useSelector(store => store.user)

    if (!otherUsers) return null

    return (
        <div className='h-full overflow-y-auto scroll-smooth'>

            {
                otherUsers.map((user) => (
                    <SingleUser key={user._id} user={user} />
                ))
            }

        </div>
    )
}

export default OtherUsers