import React from "react";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5"; // Corrected import

function Tags() {
  return (
    <div className="flex flex-row mx-7 justify-between text-xl mt-14">
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <MdLocationPin className="w-6 h-6 text-black pr-1" />
          <div className="text-white font-semibold">Location</div>
        </div>
        <div className="text-white font-semibold pl-6">Kakinada, Andhra Pradesh</div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <MdEmail className="w-6 h-6 text-black pr-1" />
          <div className="text-white font-semibold">Email</div>
        </div>
        <div className="text-white font-semibold pl-6">anukagandi454@gmail.com</div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <FaLinkedin className="w-6 h-6 text-black pr-1" />
          <div className="text-white font-semibold">LinkedIn</div>
        </div>
        <div className="text-white font-semibold pl-6">Anuka Gandi</div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <IoCall className="w-6 h-6 text-black pr-1" />
          <div className="text-white font-semibold">Call</div>
        </div>
        <div className="text-white font-semibold pl-6">+91 9959411454</div>
      </div>
    </div>
  );
}

export default Tags;
