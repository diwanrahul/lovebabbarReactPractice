import { useState } from 'react';
export default function LoginForm() {
  
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMobileValid, setIsMobileValid] = useState(false);
  
  const [emailMessage, setEmailMessage] = useState("");
  const [mobileMessage, setMobileMessage] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;

  

      //email validation.......................................................................................................
    if (name === "email") {
      const pattern = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z0-9._-]{5,}@(gov|nic)\.in$/;
      setEmail(value);
      if (!value || !pattern.test(value)) {
        setEmailMessage("Invalid email");
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
        setEmailMessage("Valid email");
      }
    } 
    
        //mobile validation.......................................................................................................
    else if (name === "mobile") {
      setMobile(value); 
      const pattern = /^[0-9]*$/
      if(pattern.test(value) && mobile.length !== 9 ){setMobileMessage("invalid mobile");
        setIsMobileValid(false);
      }else{
           if ( pattern.test(value) || mobile === "") {
           setMobileMessage("Valid mobile");
           setIsMobileValid(true);
      } else{
           setIsMobileValid(false);
      }
      }
     
    }
  };



  return (
    <div className='flex bg-orang-600 justify-around w-full mt-[0px] fixed '>
      <div className='w-[800px]'>
        <img src='/login_form.png' alt='registration form here' />
      </div>

      <div className='flex justify-center flex-col items-center h-8/12  px-5 text-xl w-5/12 font-bold  '>
        <h1 className='mb-12 text-3xl'>Login Yourself</h1>
        <form>
         

          <label htmlFor='email'>
            Email:
            <br />
            <input
              className='h-12 '
              type='email'
              name='email'
              value={email}
              onChange={changeHandler}
              required
              placeholder='Enter your email'
            />
            {isEmailValid ? (
              <span style={{ color: 'green' }}>{emailMessage}</span>
            ) : (
              <span style={{ color: 'red' }}>{emailMessage}</span>
            )}
          </label>
          <br />

          <label htmlFor='phone'>
            Phone:
            <br />
            <input
              type='number'
              name='mobile'
              className='h-12'
              onChange={changeHandler}
              
              value={mobile}
              maxLength='10'
              required
              placeholder='Enter your mobile'
            />
            {isMobileValid ? (
              <span style={{ color: 'green' }}>{mobileMessage}</span>
            ) : (
              <span style={{ color: 'red' }}>{mobileMessage}</span>
            )}
          </label>
          <br />


          <div>
            <button className={`bg-orange-500 px-5 my-3 py-2 rounded-lg w-full ${isEmailValid && isMobileValid && "hover:bg-orange-400 hover:scale-125 transition-all easy-in-out duration-500"}  ${ !isEmailValid && !isMobileValid && "cursor-not-allowed"}`} disabled={!isEmailValid && !isMobileValid}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
