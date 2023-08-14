"use client";
import { asyncsigninstudent } from "@/store/Actions/studentActions";
import Link from "next/link";
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

  const SigninHandler = () => {
    const student = {
      email: "sheryians.community@gmail.com",
      password: "12345678",
    };
    dispatch(asyncsigninstudent(student));
  };

  return (
    <div className="container mt-5">
      <button onClick={SigninHandler} className="btn btn-danger">
        Signin
      </button>
      <br />
      <Link href="/student/forget">Forget Password ?</Link>
    </div>
  );
};

export default page;
