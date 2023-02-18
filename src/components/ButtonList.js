import React from 'react'
import Button from './Button';

function ButtonList() {
  const buttonList = ["All", "Music", "Game", "Live", "Motivation", "Funny", "Trending"];
  return (
    <div className='flex gap-3'>
      {buttonList.map((item, index)=>{
        return <Button item={item} key={index}/>
      })}
    </div>
  )
}

export default ButtonList