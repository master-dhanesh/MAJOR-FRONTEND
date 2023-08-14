"use client";
import {
  asynccurrentemploye,
  asyncsignoutemploye,
} from "@/store/Actions/employeActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const employeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);

  useEffect(() => {
    dispatch(asynccurrentemploye());
    if (isAuthenticated) router.push("/employe/auth");
  }, [isAuthenticated]);

  const SignoutHandler = () => {
    dispatch(asyncsignoutemploye());
  };

  return (
    <>
      <nav className="container mt-5">
        <Link href={isAuthenticated ? "/employe/auth" : "/employe"}>Home</Link>{" "}
        <br />
        {isAuthenticated ? (
          <>
            <Link href="/employe/auth/profile">Profile</Link>
            <br />
            <Link href="/employe/auth/applied">My Applications</Link>
            <br />
            <Link onClick={SignoutHandler} href="">
              Signout
            </Link>
          </>
        ) : (
          <>
            <Link href="/employe/signup">Signup</Link> <br />
            <Link href="/employe/signin"> Signin</Link>
          </>
        )}
      </nav>

      {children}
    </>
  );
};

export default employeLayout;
