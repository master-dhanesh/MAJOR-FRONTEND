import axios from "@/utils/axios";
import {
  addstudent,
  addjobs,
  addinternships,
  removestudent,
  iserror,
} from "../Reducers/studentReducer";

export const asynccurrentstudent = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
    dispatch(addstudent(data.student));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignupstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signup", student);
    asynccurrentstudent();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsigninstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signin", student);
    asynccurrentstudent();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignoutstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/student/signout");
    dispatch(removestudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncupdatestudent = (student) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/update/" + _id, student);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncavatarstudent = (avatar) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/avatar/" + _id, avatar);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncresetpasswordstudent = (password) => async (
  dispatch,
  getState
) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post(
      "/student/reset-password/" + _id,
      password
    );
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncforgetpasswordstudent = (email) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await axios.post("/student/send-mail/", email);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncotppasswordstudent = (pwd) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/forget-link/", pwd);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncalljobs = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/alljobs/");
    dispatch(addjobs(data.jobs));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncallinternships = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/allinternships");
    dispatch(addinternships(data.internships));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncapplyjobstudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/apply/job/" + id);
    dispatch(asynccurrentstudent());
    dispatch(asyncalljobs());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncapplyinternshipstudent = (id) => async (
  dispatch,
  getState
) => {
  try {
    const { data } = await axios.post("/student/apply/internship/" + id);
    dispatch(asynccurrentstudent());
    dispatch(asyncallinternships());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncaddedustudent = (edu) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/add-edu", edu);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncdeleteedustudent = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/delete-edu/" + id);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asynceditedustudent = (id, edu) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/resume/edit-edu/" + id, edu);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};
