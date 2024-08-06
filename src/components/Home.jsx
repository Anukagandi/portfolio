import React from "react";

const Home = () => {
  return (
    <div>
      <div className=" space-y-3 px-32 w-full gap-12 flex pt-12 h-full ">
        <div className="w-full flex justify-center items-start flex-col">
        <p className="text-[#FFFFFF]">Hii My, Name is Anuka gandi</p>
        <div className="flex space-x-3">
          <p className="text-white text-5xl font-extrabold"> I'M </p>
          <p className="text-[#FFFFFF] text-5xl font-extrabold">MERN </p>
        </div>
        <p className="text-[#FFFFFF] text-5xl font-extrabold">
          Stack Developer{" "}
        </p>

        <p className=" text-white text-2xl pt-7 ">Based In Andra Pradesh , India.</p>

        <div className="space-x-6 font-small pt-5">
          <a
            href="https://www.linkedin.com/in/anuka-gandi-a056a328a/"
            target="_blank"
          >
            {" "}
            <button className=" text-black bg-[#FFFFFF] rounded-3xl px-5 py-3">
              CONNECT WITH ME
            </button>
          </a>
          {/* <button className=" text-black bg-[#00ABF0] rounded-3xl px-5 py-3">CONNECT WITH ME</button> */}
          
        </div>
        <img src="" alt="" />
        </div>
        <div>
        <img className=" aspect-square object-cover rounded-full" src="/anu.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
