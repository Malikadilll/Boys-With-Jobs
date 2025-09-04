import React from 'react'

const Card = ({ childern }) => {
  return (
    <div className='bg-gray-100 p-6 rounded-lg shadow-md' >
        { childern }
    </div>
  )
}

export default Card