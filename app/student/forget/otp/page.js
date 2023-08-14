"use client";
import { asyncotppasswordstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state.studentReducer);

  const sentotpHandler = async () => {
    const newpwd = {
      email: "sheryians.community@gmail.com",
      opt: "4719",
      password: "123456",
    };
    await dispatch(asyncotppasswordstudent(newpwd));
    if (errors.length === 1) {
      router.push("/student/signin");
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
