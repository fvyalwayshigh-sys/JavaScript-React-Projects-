import React from "react";
import RightCardContent from "../../assets/RightCardContent";

const RightCard = ({ users }) => {
  return (
    <div className="h-full shrink-0 w-80 overflow-hidden relative rounded-4xl">
      <img className="h-full w-full object-cover" src={users?.img} alt="" />
      <RightCardContent users={users} />
    </div>
  );
};

export default RightCard;
