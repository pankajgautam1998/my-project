import React from "react";
import hostinger from "../Image/hostinger.png";

const Hostinger = () => {
  return (
    <div>
      <div>
        <div className="flex gap-2 border shadow-md">
          <div className="flex justify-between items-center p-60 h-80 ">
            <p>
              <span className=" text-gray-400 uppercase">
                Hostinger tutorial
              </span>
              <br /> <span className="font-bold text-4xl">Introduction</span>
            </p>
          </div>
          <div className="p-32">
            <img src={hostinger} alt="" className="h-80" />
          </div>
        </div>
        <div className="p-3 border text-lg font-medium mt-2 bg-slate-100">
          <p>In this chapter you will learn about hosting.</p>
        </div>
      </div>
    </div>
  );
};

export default Hostinger;
