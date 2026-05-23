import React from 'react'

import { FaSearch } from "react-icons/fa";

const SideBar = () => {
    return (
        <div>
           <form action="">
            <input 
            type="text"
            className='input input-border rounded-md '
            placeholder='Search'
             />
             <button>
                <FaSearch />
             </button>
           </form>
        </div>
    )
}

export default SideBar