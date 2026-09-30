import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div className="h-full gap-10 overflow-x-auto p-4 w-2/3 flex flex-nowrap ">
      {props.users.map(function (user, index) {
        return <RightCard key={index} users={user} />;
      })}
    </div>
  );
};

export default RightContent;
