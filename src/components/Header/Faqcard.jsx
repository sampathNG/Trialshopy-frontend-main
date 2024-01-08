import React, { useState } from 'react'

function FeedbackCard({ title, content, id, setOpened, opened }) {

  return (
    <div onClick={()=>setOpened(id)} className='cursor-pointer border-2 '>
      <div className='flex justify-between p-4 mt-1'>
        <h1 className=' text-xl'>{title}</h1>
        {opened === id ? <img src='/icons/up.svg' alt='+' className=" h-5" /> : <img src="/icons/down.svg" alt='+' className=" h-5" />}
      </div>
      {opened === id && <p className='p-4 max-w-3xl'>{content}</p>}
    </div>
  )
}

export default FeedbackCard