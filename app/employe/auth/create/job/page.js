"use client";
import { asynccreatejobemploye } from "@/store/Actions/employeActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const CreateJobHandler = () => {
    const job = {
      title: "Data Scientist",
      skill: "Python Nympy Pandas Power BI",
      jobtype: "Remote",
      openings: 12,
      description: "Lorem ipsum dolor sit amet",
      preferences: "well trained and experienced",
      salary: 120000,
      perks: "gym subs wifi subs",
      assesments: "why should i hire you ?",
    };

    dispatch(asynccreatejobemploye(job));
    
  };
  return (
    <div className="container mt-5">
      <button onClick={CreateJobHandler} className="btn btn-primary">
        Create Job
      </button>
    </div>
  );
};

export default page;
