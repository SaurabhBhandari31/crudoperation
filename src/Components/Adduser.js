import axios from "axios";
import React, { useState } from "react";
// import { unstable_HistoryRouter } from "react-router-dom";

const Adduser = () => {
  // let history =unstable_HistoryRouter();
  // console.log(history)
  const [data, setData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHanndler = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3003/users`, data);
    //    history.push("/");

    setData({
      name: "",
      email: "",
      role: "",
    });
  };
  return (
    <div className="container">
      <h4>Add user detail</h4>
      <form onSubmit={submitHanndler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            value={data.name}
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={data.email}
            onChange={inputHandler}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="role"
            value={data.role}
            onChange={inputHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Adduser;
