/* eslint-disable no-unused-vars */
import React from 'react'
import { Login as loginComponent } from '../components'
function Login() {
  console.log("inside login page");
  return (
    <div className='py-8'>
        <loginComponent />
    </div>
  )
}

export default Login