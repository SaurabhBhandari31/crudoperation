import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const [fetch, setFetch] = useState([]);

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const result = await axios.get(`http://localhost:3003/users`);
    //  console.log(result);
    setFetch(result.data);
  };
  const deleteitem = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loaduser();
  };
  return (
    <>
      <Link to="/adduser" type="button" class="btn btn-primary mt-5">
        ADD USERS
      </Link>
      <div className="container mt-4">
        <table className="table">
          <thead className="table-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIAAL</th>
              <th scope="col">ROLE</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {fetch.map((curE, index) => {
              return (
                <tr key={curE.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{curE.name}</td>
                  <td>{curE.email}</td>
                  <td>{curE.role}</td>
                  <td>
                    {" "}
                    <Link
                      to={`/edituser/${curE.id}`}
                      type="button"
                      class="btn btn-primary  "
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <Link
                      to="/"
                      type="button"
                      class="btn btn-danger "
                      onClick={() => deleteitem(curE.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
