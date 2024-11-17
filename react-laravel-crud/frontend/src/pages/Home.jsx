import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleUserDelete = async (id) => {
    const res = await fetch(`/users/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      // If DELETE request is successful, remove the deleted user from the state
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      console.log("User deleted successfully");
    } else {
      console.error("Failed to delete user");
    }
  };

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
              <td>
                <Link className="btn btn-dark mr-2" to={`/edit/${user.id}`}>
                  Edit
                </Link>
                <button
                  className="btn btn-danger g-2"
                  onClick={() => handleUserDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
