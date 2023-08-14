"use client";
import { asyncsigninemploye } from "@/store/Actions/employeActions";
import Link from "next/link";
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

  const SigninHandler = () => {
    const employe = {
      email: "dhanesh1296@gmail.com",
      password: "123456",
    };
    dispatch(asyncsigninemploye(employe));
  };

  return (
    <div className="container mt-5">
      <button onClick={SigninHandler} className="btn btn-danger">
        Signin
      </button>
      <br />
      <Link href="/employe/forget">Forget Password ?</Link>
    </div>
  );
};

export default page;
