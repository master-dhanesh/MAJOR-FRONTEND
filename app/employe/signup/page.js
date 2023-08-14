"use client";
import { asyncsignupemploye } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);

  useEffect(() => {
    if (isAuthenticated) router.push("/employe/auth");
  }, [isAuthenticated]);

  const SignupHandler = () => {
    const newemploye = {
      firstname: "sheryians",
      lastname: "coding school",
      contact: "1234567890",
      email: "sheryians.community@gmail.com",
      password: "123456",
      organizationname: "Sheryians PVT LTD",
    };
    dispatch(asyncsignupemploye(newemploye));
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
