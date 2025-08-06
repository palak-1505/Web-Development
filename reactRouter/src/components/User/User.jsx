import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams();

    return (
        <div className='bg-gray-200 text-3xl font-bold p-4 m-4 text-center'>User : {userid}</div>
        
    )
}

export default User
