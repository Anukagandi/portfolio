import React from 'react';


const NavBar = () => {
  return (
    <div className="flex items-center w-[full] justify-between h-20 px-30 text-white ">
     <div>
        <h1 className="text-4xl font-bold ">Anuka Gandi</h1>
        </div> 
        <ul className="flex space-x-14 ml-96 ">
            <li className=" cursor-pointer text-[#616161]" >Home</li>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Me</li>
            <li className="cursor-pointer">Skills</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer px-">Contact</li>
            
            
        </ul>
    </div>
  )
}

export default NavBar