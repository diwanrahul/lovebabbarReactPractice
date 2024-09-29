import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
   
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        setusers(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div>
      <table className="table">
        <thead>

        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td >
              <Link className="btn btn-dark mr-2" to={`/edit/${user.id}`}>Edit</Link>
              <Link className="btn btn-danger g-2" to="">Delete</Link>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
