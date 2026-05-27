import React from 'react'


const SingleUser = () => {
    return (

        <div className='flex items-center gap-3 p-3 hover:bg-gray-800 rounded-lg cursor-pointer transition-all'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img
                        src="https://imgs.search.brave.com/Q_rCWpJzDs2eN040OGCp3vrFRpVgqe0KMv-6_LRYqfM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9hcnRpc3RpYy1o/aWdoLWZhc2hpb24t/cG9ydHJhaXQtb2Yt/YS13b21hbi13aXRo/LXN1bmdsYXNzZXMt/ZnJlZS1pbWFnZS5q/cGVnP3c9NjAwJnF1/YWxpdHk9ODA"
                        alt="user"
                    />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-2 flex-1'>
                    <p>Rohit</p>
                </div>
            </div>
           
        </div>

    )
}

export default SingleUser