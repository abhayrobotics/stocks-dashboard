import React from "react";

const StockDescription = ({ content }) => {
  console.log(content);
  return (
    <div className="w-full sm:w-[50%] __dark-shade p-2 m-3 rounded text-slate-200 font-thin">
        <h2 className="text-lg font-bold ">Company Profile</h2>
      <div >{content}</div>
    </div>
  );
};

export default StockDescription;
