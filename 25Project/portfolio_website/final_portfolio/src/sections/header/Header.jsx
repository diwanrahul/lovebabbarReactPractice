import React from 'react'

const Header = () => {
  return (
    <div
    id='Home'
    className='h-[100vh] flex justify-around'>
        <div className='flex flex-col justify-center gap-3 bg-red-500 w-[25%]'>
            <div className='flex gap-2 px-4 py-2 bg-slate-300 rounded-md shadow-xl  w-[60%] h-[15vh]'>
                    <span>🙌</span>
                    <div>
                        <p>Hello, I am </p>
                        <h1>Rahul</h1>
                    </div>
            </div>

            <div className='flex gap-2 px-4 py-2 bg-slate-300 rounded-lg shadow-lg flex-col w-[40%] justify-end'>
                    <p>Web Developer</p>
                    <p>Freelancer</p>
            </div>
        </div>
        <div>
            <img src="../../assets/profile1.png" alt="profile-picture" />
            <img src="../../assets/circle.svg" alt="circle" />
        </div>
        <div>
        {["Redux", "React", "javascript"].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt={`technology-${index}`} />
          </div>
        ))}
        </div>
    </div>
  )
}

export default Header