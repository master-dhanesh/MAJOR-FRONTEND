"use client";
import {
  asyncapplyinternshipstudent,
  asyncapplyjobstudent,
} from "@/store/Actions/studentActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const { jobs, internships, student } = useSelector(
    (state) => state.studentReducer
  );
  const dispatch = useDispatch();

  const ApplyJobHandler = (id) => {
    dispatch(asyncapplyjobstudent(id));
  };

  const ApplyInternshipHandler = (id) => {
    dispatch(asyncapplyinternshipstudent(id));
  };

  useEffect(() => {}, [student]);

  return (
    <div className="container mt-5">
      <h1>
        Available jobs for <strong>{student && student.firstname}</strong>
      </h1>
      <ul className="list-group">
        {jobs &&
          jobs.map((j) => (
            <div className="list-group-item mb-3" key={j._id}>
              {JSON.stringify(j)} <br />
              <br />
              {!j.students.includes(student && student._id) ? (
                <button onClick={() => ApplyJobHandler(j._id)}>
                  Apply Job
                </button>
              ) : (
                <h3>Already Applied</h3>
              )}
            </div>
          ))}
      </ul>

      <hr />

      <h1>
        Available internships for{" "}
        <strong>{student && student.firstname}</strong>
      </h1>
      <ul className="list-group">
        {internships &&
          internships.map((intern) => (
            <div className="list-group-item mb-3" key={intern._id}>
              {JSON.stringify(intern)} <br />
              <br />
              {!intern.students.includes(student && student._id) ? (
                <button onClick={() => ApplyInternshipHandler(intern._id)}>
                  Apply Internship
                </button>
              ) : (
                <h3>Already Applied</h3>
              )}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default page;
