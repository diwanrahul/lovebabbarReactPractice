import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const [users, setusers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
   
    fetch("/users")
      .then((response) => response.json())
      .then((data) => {
        setusers(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, [users]);

  const handleUser = async (id)=>{
    const res =await fetch(`users/${id}`,{
      method:"DELETE",
    })
    const data = await res.json();
    console.log(data);
    navigate("/");
    
  }
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
              <button className="btn btn-danger g-2" onClick={()=>handleUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
