import React, { useState } from 'react'

const Login = () => {

    const [isCMS, setIsCMS] = useState(false);
    const [formData, setFormData] = useState({
        usertype:"",
        userid:"",
        password:"",
    });

    const handleAuth = async ()=>{
        console.log(formData)
        const res = await fetch("http://localhost:5000/api/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        
        const data = await res.text();
        if(data==="authenticated"){
            setIsCMS(true)
        }else{
            setIsCMS(false)
        }
        console.log("user auth => ", data);
    }

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prev)=>({...prev, [name]:value}))
    }
  return (
    <div className={`${isCMS ? 'bg-green-600' : 'bg-red-700'}`}
    >
        <div>Log in</div>
        <div>
            <div>
                <label name="usertype" onChange={(e)=>handleChange(e)}>Login as : 
                    <input type="radio" name="usertype" value="cms" /> CMS
                    <input type="radio" name="usertype" value="user" />user
                </label>
                
            </div>
            <div>
                <label>Username :</label>
                <input name="userid" type='text' onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
                <label>Password :</label>
                <input name='password' type='text' onChange={(e)=>handleChange(e)}/>
            </div>
            <div>
               <button
               onClick={handleAuth}>
                Login
               </button>
            </div>
        </div>
    </div>
  )
}

export default Login