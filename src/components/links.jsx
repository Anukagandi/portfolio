import React from "react";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Links = () => {
  return (
    <div>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <MdLocationPin className="text-2xl text-gray-700" />
          <p className="text-gray-700">Andhra Pradesh, India</p>
        </div>
        <div className="flex items-center space-x-2">
          <MdEmail className="text-2xl text-gray-700" />
          <p className="text-gray-700">anuka@example.com</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaLinkedin className="text-2xl text-gray-700" />
          <a href="https://www.linkedin.com/in/anuka-gandi-a056a328a/" target="_blank" rel="noopener noreferrer" className="text-gray-700">
            Connect with me on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
