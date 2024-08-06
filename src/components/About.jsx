import React from "react";

function About() {
  return (
    <div className=" w-[70%]  flex flex-col items-end justify-center mx-auto mt-14">
      <div className="flex justify-start flex-col w-[70%]">
        <p className="text-white text-4xl font-bold  w-[65%]  mx-auto ">About Me</p>
        
        <p className=" text-white text-lg  w-[90%] mx-auto">
        I am  a student of computer science engineering with artificial intelligence 
at kakinada institute of engineering and technology for womens . And i am 
also a member of Globle coding club(GCC) . I have completed my certifications
in PYTHON, HTML, CSS and JAVASCRIPT.
        </p>
        <div className="mt-14">
          <div className="flex flex-column ">
            <div className="text-white w-[200px] text-xl font-bold">Name:</div>
            <div className="text-white text-xl "> Anuka gandi</div>
          </div>

          <div className="flex flex-column mt-4">
            <div className="text-white w-[200px] text-xl font-bold">
              Date Of Birth:
            </div>
            <div className="text-white text-xl"> 13/072005</div>
          </div>

          <div className="flex flex-column mt-4">
            <div className="text-white w-[200px] text-xl font-bold">
              Address:
            </div>
            <div className="text-white text-xl">
              Gorripudi,kakinada district,andhra pradesh
            </div>
          </div>

          <div className="flex flex-column mt-4">
            <div className="text-white w-[200px] text-xl font-bold">Email:</div>
            <div className="text-white text-xl">
              anukagandi454@gmail.com
            </div>
          </div>

          <div className="flex flex-column mt-4">
            <div className="text-white w-[200px] text-xl font-bold">Phone:</div>
            <div className="text-white text-xl"> +91 9959411454</div>
          </div>

          {/* <div className="mt-10">
            <a
              target="_blank"
              className="bg-[#00ABF0] text-black px-4 py-3 rounded-3xl cursor-pointer"
              rel="ro referrer no-opener"
              href="https://drive.google.com/file/d/1Dx2L66g8q4Rq2CZtorQf9FD4FpVYY_GW/view?usp=drivesdk"
            >DOWNLOAD CV</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
