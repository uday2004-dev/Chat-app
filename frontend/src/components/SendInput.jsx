import React from 'react'

const SendInput = () => {
    return (
        <div className='w-full'>
            <form>
                
                <div className='w-full relative flex items-center'>
                    
                    <input
                        type="text"
                        placeholder='Write a message...'
                        className='border border-gray-600 text-sm rounded-full block w-full p-3 pr-20 bg-gray-800 text-white focus:outline-none focus:border-blue-500'
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