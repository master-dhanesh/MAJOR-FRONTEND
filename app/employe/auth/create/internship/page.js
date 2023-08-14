"use client";
import { asynccreateinternshipemploye } from "@/store/Actions/employeActions";
import React from "react";
import { useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();

  const CreateInternshipHandler = () => {
    const internship = {
      title: "Data Scientist",
      skill: "Python Nympy Pandas Power BI",
      internshiptype: "In office",
      openings: 2,
      duration: "06 months",
      responsibility: "kachra utharna pdeag",
      preferences: "well trained and experienced",
      stipend: {
        status: "Performance based",
        amount: 12000,
      },
      perks: "gym subs wifi subs",
      assesments: "why should i hire you ?",
    };

    dispatch(asynccreateinternshipemploye(internship));
  };
  return (
    <div className="container mt-5">
      <button onClick={CreateInternshipHandler} className="btn btn-danger">
        Create Internship
      </button>
    </div>
  );
};

export default page;
