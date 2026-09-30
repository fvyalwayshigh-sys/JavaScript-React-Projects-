import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-18">
      <h4 className="bg-black text-white px-5 py-3 text-sm uppercase rounded-full">
        Target Audience
      </h4>
      <button className="bg-gray-100 px-6 py-2 rounded-full tracking-wider text-sm uppercase">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
