"use client";
import {
  asyncavatarstudent,
  asyncresetpasswordstudent,
  asyncupdatestudent,
} from "@/store/Actions/studentActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);

  const StudentUpdateHandler = () => {
    const newStudent = {
      firstname: "master",
      lastname: "dhanesh",
    };
    dispatch(asyncupdatestudent(newStudent));
  };

  const AvatarHandler = (e) => {
    e.preventDefault();
    console.log();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    dispatch(asyncavatarstudent(formdata));
  };

  const ResetPasswordHandler = () => {
    const pwd = {
      password: "12345678",
    };
    dispatch(asyncresetpasswordstudent(pwd));
  };

  return (
    <div className="container mt-3">
      <img height={200} src={student && student.avatar.url} alt="" />
      <form onSubmit={AvatarHandler} encType="multipart/form-data">
        <input type="file" name="avatar" />
        <button>Submit</button>
      </form>
      <br />
      <br />
      <button className="btn btn-warning me-5" onClick={StudentUpdateHandler}>
        Update Student
      </button>

      <button className="btn btn-danger" onClick={ResetPasswordHandler}>
        Reset Student Password
      </button>
    </div>
  );
};

export default page;
