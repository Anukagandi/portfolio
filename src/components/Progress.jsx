import React from 'react'

function Progess({progressPercentage, skill}) {
  return (
    <div className='flex flex-col w-[35%]' >
       <div className=' flex flex-row justify-between mb-2'>
           <p className='text-white'>{skill}</p>
           <p className='text-white'>{progressPercentage}%</p>
        </div>
        <div className='h-3 w-full bg-[#FFFFFF] rounded'>
        <div style={{ width: `${progressPercentage}%`}}
                className={`h-full rounded bg-[#292929]`}>
            </div>
        </div>
    </div>
  )
}

export default Progess;
