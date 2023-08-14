"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { asynccurrentstudent } from "@/store/Actions/studentActions";
import { useDispatch } from "react-redux";

export const metadata = {
  title: "Homepage",
};

const page = () => {
  return (
    <div className="container mt-5">
      <Link href="/student">Student</Link> <br /> <br />
      <Link href="/employe">Employe</Link>
    </div>
  );
};

export default page;
