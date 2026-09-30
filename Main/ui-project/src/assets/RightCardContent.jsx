import React from "react";

const RightCardContent = ({ users }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between ">
      <h2 className="bg-black text-amber-50 text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center">
        {users?.key}
      </h2>

      <div className="flex flex-col gap-3">
        <p className="text-lg leading-normal  text-amber-50 m-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          nesciunt blanditiis nulla similique quod accusantium?
        </p>
        <div>
          <button className="flex items-center gap-1  text-white font-med px-8 py-3 bg-black rounded-full">
            {users?.tag || "Satisfied"} &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
