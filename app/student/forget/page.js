"use client";
import { asyncforgetpasswordstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.studentReducer);
  const sendemailHandler = async () => {
    const email = {
      email: "sheryians.community@gmail.com",
    };
    await dispatch(asyncforgetpasswordstudent(email));
    if (errors.length === 1) {
      router.push("/student/forget/otp");
    } else {
      toast.error(JSON.stringify(errors));
      return;
    }
  };

  return (
    <div className="container mt-5">
      <button onClick={sendemailHandler} className="btn btn-danger">
        Send Mail
      </button>
    </div>
  );
};

export default page;
