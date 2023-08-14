"use client";
import {
  asyncavataremploye,
  asyncresetpasswordemploye,
  asyncupdateemploye,
} from "@/store/Actions/employeActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { employe } = useSelector((state) => state.employeReducer);

  const employeUpdateHandler = () => {
    const newemploye = {
      firstname: "sheryians",
      lastname: "dojo",
    };
    dispatch(asyncupdateemploye(newemploye));
  };

  const AvatarHandler = (e) => {
    e.preventDefault();
    console.log();
    const formdata = new FormData(e.target);
    formdata.set("organizationlogo", e.target.organizationlogo.files[0]);
    dispatch(asyncavataremploye(formdata));
  };

  const ResetPasswordHandler = () => {
    const pwd = {
      password: "123456",
    };
    dispatch(asyncresetpasswordemploye(pwd));
  };

  return (
    <div className="container mt-3">
      <img height={200} src={employe && employe.organizationlogo.url} alt="" />
      <form onSubmit={AvatarHandler} encType="multipart/form-data">
        <input type="file" name="organizationlogo" />
        <button>Submit</button>
      </form>
      <br />
      <br />
      <button className="btn btn-warning me-5" onClick={employeUpdateHandler}>
        Update employe
      </button>

      <button className="btn btn-danger" onClick={ResetPasswordHandler}>
        Reset employe Password
      </button>
    </div>
  );
};

export default page;
