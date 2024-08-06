import React from 'react';

function Skills() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
        <div className="text-white style-white text-5xl font-extrabold mb-5">CONTACT</div>
        <div className="bg-white w-[400px] h-[500px]">

          <div className="flex flex-col mx-11 my-11 space-y-8">
          <div className="bg-black w-[300px] h-[40px] rounded-3xl text-white pt-2 pl-4 font-semibold">NAME:</div>

          <div className="bg-black w-[300px] h-[40px] rounded-3xl text-white pt-2 pl-4 font-semibold">EMAIL:</div>

          <div className="bg-black w-[300px] h-[40px] rounded-3xl text-white pt-2 pl-4 font-semibold">SUBJECT:</div>

          <div className="bg-black w-[300px] h-[120px] rounded-3xl text-white pt-2 pl-4 font-semibold">YOUR TEXT:</div>
           
          <div>
          <button className="text-white bg-[#616161] ml-24 flex justify-center items-center px-6 py-2 rounded-full">SUBMIT</button>
          </div>
            
          
          </div>
          
         
        </div>
    </div>
  
  );
}

export default Skills;