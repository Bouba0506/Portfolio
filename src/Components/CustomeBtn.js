import React from "react";
import { Link } from "react-router-dom";

const CustomeBtn = ({ title, stylebtn }) => {
  return (
    <div className={` "w-40 p-2 text-center rounded-full bg-black text-white" ${stylebtn} `}>
      <Link className="text-white">
      {title}
      </Link>
    </div>
  );
};

export default CustomeBtn;
