"use client";
import { asyncotppasswordemploye } from "@/store/Actions/employeActions";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.employeReducer);

  const sentotpHandler = async () => {
    const newpwd = {
      email: "sheryians.community@gmail.com",
      otp: "6004",
      password: "12345678",
    };
    await dispatch(asyncotppasswordemploye(newpwd));
    if (errors.length === 1) {
      router.push("/employe/signin");
    } else {
      toast.error(JSON.stringify(errors));
      return;
    }
  };

  return (
    <div className="container mt-5">
      <button onClick={sentotpHandler} className="btn btn-success">
        Change Password
      </button>
    </div>
  );
};

export default page;
