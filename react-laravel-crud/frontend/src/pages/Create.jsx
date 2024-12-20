import React, { useState } from 'react'
import axios from 'axios';

const Create = () => {
  const csrf = ()=> axios.get('/sanctum/csrf-cookie');

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    });
    const handleUpdateUser = (e)=>{
        // e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;

        setFormData((prev)=>({...prev, [name]:value}))
    }
    const submitForm = async (e)=>{
        e.preventDefault();
        await csrf();
        const response = await fetch('/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: formData
          });
        
          const data = await response.text();
          console.log(data);
    }
    
  return (
    <div>
    <form onSubmit={submitForm} method='post'> {/* Handle form submission */}
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={formData.name || ''} // Avoid uncontrolled component issue
          name="name"
          id="name"
          onChange={(e)=>handleUpdateUser(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={formData.email || ''} // Avoid uncontrolled component issue
          name="email"
          id="email"
          onChange={(e)=>handleUpdateUser(e)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={formData.password || ''} // Avoid uncontrolled component issue
          name="password"
          id="password"
          onChange={(e)=>handleUpdateUser(e)}
        />
      </div>
      <div>
        <button type="submit">Update</button> {/* Button type="submit" to trigger form */}
      </div>
    </form>
  </div>
  )
}

export default Create