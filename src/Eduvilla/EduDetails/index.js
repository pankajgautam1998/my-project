import React from "react";
import { useLocation, useParams } from "react-router-dom";

const EduDetails = () => {
  const { edu_blog } = useParams();
  const { state } = useLocation();
  console.log(edu_blog);
  console.log(state);
  return (
    <div className="flex flex-col items-center ">
      <img src={state.img} alt="" />
      <p className="uppercase">{state.title}</p>
      <p>{state.name}</p>
    </div>
  );
};

export default EduDetails;
