import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const page1Content = (props) => {
  return (
    <div className="py-10 flex justify-between items-center gap-10  px-18 h-[90vh]">
      <LeftContent />
      <RightContent  users={props.users}/>
    </div>
  );
};

export default page1Content;
