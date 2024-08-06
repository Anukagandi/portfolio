import React from "react";
import { FaCopyright } from "react-icons/fa6";


function Copyright() {
  return (
    <div className="flex flex-row justify-center items-center space-x-2 mx-auto mt-10 text-lg">
      <p className="text-white text-lg font-semibold">Copyright</p>
      <div>
      <FaCopyright className="text-black  w-5 h-5" />
      </div>
      <p className="text-white text-lg font-semibold">2024 All rights reserved</p>
    </div>
    
  );
}

export default Copyright;