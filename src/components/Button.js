import React from 'react'

const Button = ({item}) => {
  return (
    <div>
        <button className='py-1 px-5 m-2 bg-gray-200 rounded'>{item}</button>
    </div>
  )
}

export default Button;