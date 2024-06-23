import React from "react";
import { Link } from "react-router-dom";

const StockDescription = ({ content }) => {
  console.log(content);
  return (
    <div className=" __dark-shade p-3 m-3 rounded text-slate-200 font-thin">
      <div  className="flex justify-between">
        <img className="max-w-12 " src={content?.image} alt="Logo"></img>
        <div className="text-2xl  font-semibold p-2 text-[--headlight-color] ">{content?.price +" " +content?.currency}</div>
      </div>
      <div className="text-lg font-semibold">{content?.companyName}</div>
      <div className="text-md font-semibold"> CEO: {content?.ceo}</div>
      <h2 className="text-lg font-semibold "> {content?.industry}</h2>
      <div>{content?.description}</div>
      <Link className="text-yellow-300 hover:text-black" to={content?.website} target="_blank">
        {content?.website}
      </Link>
    </div>
  );
};

export default StockDescription;
