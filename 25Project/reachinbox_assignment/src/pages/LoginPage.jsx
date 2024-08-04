import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className='flex  flex-col justify-around items-center border-1 border-slate-500 bg-black text-white h-[100vh]
    min-[320px]:text-center max-[600px]:bg-sky-300 min-[320px]:text-sm' >
      <h2 className='text-3xl'>REACHINBOX</h2>
      <div className='bg-gree-300 h-[90vh] w-10/12 flex justify-center items-center '>

      <Login />
      </div>
    </div>
  );
};

export default LoginPage;
