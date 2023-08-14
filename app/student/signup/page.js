"use client";
import { asyncsignupstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    if (isAuthenticated) router.push("/student/auth");
  }, [isAuthenticated]);

  const SignupHandler = () => {
    const newStudent = {
      firstname: "dhanesh",
      lastname: "malviya",
      contact: "1234567890",
      city: "bhopal",
      gender: "Male",
      email: "dhanesh1296@gmail.com",
      password: "123456",
    };
    dispatch(asyncsignupstudent(newStudent));
  };

  return (
    <div className="container mt-5">
      <button onClick={SignupHandler} className="btn btn-success">
        Signup
      </button>
    </div>
  );
};

export default page;
