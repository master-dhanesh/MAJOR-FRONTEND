"use client";
import { asyncdeleteedustudent } from "@/store/Actions/studentActions";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);

  const DeleteHandler = (id) => {
    dispatch(asyncdeleteedustudent(id));
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-3">This is Your Resume Section</h3>
      <h4>
        Education <Link href="/student/auth/resume/education">+</Link>{" "}
      </h4>
      <ul className="list-group">
        {student &&
          student.resume.education.map((e) => (
            <div key={e.id} className="list-group-item">
              {JSON.stringify(e)}

              <Link
                className="mx-4 btn btn-sm btn-primary"
                href={`/student/auth/resume/education/${e.id}`}
              >
                Edit
              </Link>

              <button
                onClick={() => DeleteHandler(e.id)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </div>
          ))}
      </ul>

      <hr />

      <h3>All the leftover information</h3>
    </div>
  );
};

export default page;
