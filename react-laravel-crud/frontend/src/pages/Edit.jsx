import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const [updatedUser, setUpdatedUser] = useState({});

 
  useEffect(() => {
    fetchUserDetails(id); 
  }, [id]);

  
  const fetchUserDetails = async (userId) => {
    try {
      const res = await fetch(`/users/${userId}/edit`); 
      if (!res.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await res.json();
      setUpdatedUser(data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleUpdateUser = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

 
  const submitForm = async(id) => {
    const res = await fetch(`/users/${id}`,{
      method:"PUT",
      body:updatedUser,
    });
    const data = await res.json();
    console.log(data);
    console.log('Updated user details:', updatedUser);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={updatedUser.name || ''}
            name="name"
            id="name"
            onChange={handleUpdateUser}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={updatedUser.email || ''} 
            name="email"
            id="email"
            onChange={handleUpdateUser}
          />
        </div>
        <div>
          <button type="button" onClick={()=>submitForm(id)}>Update</button> 
        </div>
      </form>
    </div>
  );
};

export default Edit;
