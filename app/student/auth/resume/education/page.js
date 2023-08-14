"use client";

import { asyncaddedustudent } from "@/store/Actions/studentActions";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const AddEduHandler = () => {
    const edu = {
      status: "Pass",
      year: "2022",
      board: "Central",
      performance: "8.09",
      school: "IIT",
      degree: "PHD",
    };

    dispatch(asyncaddedustudent(edu));
  };

  return (
    <div className="container mt-5">
      <button onClick={AddEduHandler} className="btn btn-primary">
        Add Education
      </button>
    </div>
  );
};

export default page;
