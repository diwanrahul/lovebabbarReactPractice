import { useState } from 'react'

const Skills = () => {
  const [skillData, setSkillData] = useState({
    title : "",
    imgSrc : ""
  });

  const handleSkills = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setSkillData((prev)=>({...prev, [name] : value}))
  }

  const submitSkill = async () => {
    try {
        console.log(skillData);

        const response = await fetch("http://localhost:5000/api/add_skill", {
            method: "POST", // Specify the HTTP method
            headers: {
                "Content-Type": "application/json", // Indicate that you're sending JSON data
            },
            body: JSON.stringify(skillData), // Convert the skillData object to a JSON string
        });

        // Handle the response
        if (!response.ok) {
            throw new Error(`Failed to submit skill: ${response.statusText}`);
        }

        const data = await response.text();
        console.log("Skill added successfully:", data);
    } catch (error) {
        console.error("Error submitting skill:", error);
    }
};

  return (
    <div
    id='Skills'
    className='h-[100vh] flex flex-col justify-center items-center bg-slate-100 '>
      <div className='flex justify-center items-center flex-col bg-slate-400 w-8/12 h-[50vh] gap-3  '>
      <label className='text-xl font-semibold'>Skill title : </label>
      <input 
      className='bg-transparen border-2 p-3 w-3/4 '
      placeholder='insert title..'
      type="text"
      name="title"
      value={skillData.title}
      onChange={(e)=>handleSkills(e)}
      />

      <label className='text-xl font-semibold '>ImgSrc :</label>
      <input
      className='bg-transparen border-2 p-3 w-3/4 '
      placeholder='insert image URL'
      name="imgSrc"
       value={skillData.imgSrc}
       type="text"
       onChange={(e)=>handleSkills(e)} />

      <button
      className='px-4 py-2 text-white text-2xl bg-blue-700 rounded-md' 
      onClick={submitSkill}>
        Add skill
      </button>
      </div>
    </div>
  )
}

export default Skills