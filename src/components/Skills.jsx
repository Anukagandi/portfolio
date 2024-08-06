import React from 'react'
import Progess from './Progress'

function Skills() {
  return (
    <div className=" mt-14 flex flex-col justify-center items-center mx-auto">
       <h2 className="text-white text-4xl font-bold mb-5">My Skills</h2>
       <div className='flex flex-row justify-between w-[60%] mx-auto mt-3'>
            <Progess progressPercentage={85} skill={"Python"} />
            <Progess progressPercentage={90} skill={"HTML"} />
       </div>

       <div className='flex flex-row justify-between w-[60%] mx-auto mt-6'>
            <Progess progressPercentage={75} skill={"JavaScript"} />
            <Progess progressPercentage={85} skill={"CSS"} />
       </div>
        
       <div className='flex flex-row justify-between w-[60%] mx-auto mt-6'>
            <Progess progressPercentage={65} skill={"Reactjs"} />
            <Progess progressPercentage={50} skill={"Figma"} />
       </div>

    </div>
  )
}

export default Skills
