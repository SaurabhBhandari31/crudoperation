import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    email: "",
    role: "",
  });
  useEffect(() => {
    updateData();
  }, []);
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHanndler = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, data);
    setData({
      name: "",
      email: "",
      role: "",
    });
  };

  const updateData = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setData(res.data);
  };
  return (
    <div className="container">
      <h4>Update user detail</h4>
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
          Update Detail
        </button>
      </form>
    </div>
  );
};

export default Edit;
