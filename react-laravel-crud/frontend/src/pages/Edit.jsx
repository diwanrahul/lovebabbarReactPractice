import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams(); // Destructure id from params
  const [updatedUser, setUpdatedUser] = useState({}); // State for user details

  // Fetch user details when the component mounts
  useEffect(() => {
    fetchUserDetails(id); // Pass user id from params
  }, [id]);

  // Fetch user details from the backend
  const fetchUserDetails = async (userId) => {
    try {
      const res = await fetch(`/users/${userId}/edit`); // Request using the id from params
      if (!res.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await res.json();
      setUpdatedUser(data); // Set the fetched data to state
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  // Update user details state on input change
  const handleUpdateUser = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const updateUserDetails = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log('Updated user details:', updatedUser);
    // Here you can send the updatedUser data to the backend
  };

  return (
    <div>
      <form onSubmit={updateUserDetails}> {/* Handle form submission */}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={updatedUser.name || ''} // Avoid uncontrolled component issue
            name="name"
            id="name"
            onChange={handleUpdateUser}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={updatedUser.email || ''} // Avoid uncontrolled component issue
            name="email"
            id="email"
            onChange={handleUpdateUser}
          />
        </div>
        <div>
          <button type="submit">Update</button> {/* Button type="submit" to trigger form */}
        </div>
      </form>
    </div>
  );
};

export default Edit;
