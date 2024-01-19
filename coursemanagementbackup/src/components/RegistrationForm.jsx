import  { useContext, useState } from 'react';
import '../style/registrationform.css';
import { statesAndCities } from '../data/state_city_list';
import { DarkModeContext } from '../context/DarkModeContext';
export default function RegistrationForm() {
    const {isDarkMode} = useContext(DarkModeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMobileValid, setIsMobileValid] = useState(false);
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [mobileMessage, setMobileMessage] = useState("");
  const [state, setState] = useState('');
const [city, setCity] = useState('');
const handleStateChange = (event) => {
  setState(event.target.value);
  setCity("");
};
console.log(isDarkMode);
const handleCityChange = (event) => {
  setCity(event.target.value);
};
  const changeHandler = (e) => {
    const { name, value } = e.target;

        //name validation.......................................................................................................
    if (name === "name") {
      const regex = /^[A-Za-z\s]+$/;
     
      if (!value || !regex.test(value)) {
       
        setNameMessage("Invalid name");
        setIsNameValid(false);
      } else {setName(value); 
        setIsNameValid(true);
        setNameMessage("Valid name");
      }

      //email validation.......................................................................................................
    } else if (name === "email") {
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
    <div className={`flex bg-orang-600 justify-around w-full mt-[50px] fixed ${isDarkMode ? "text-white": "text-black"}`}>
      <div className='w-[800px]'>
        <img src='/registration_form.png' alt='registration form here' />
      </div>

      <div className='flex justify-center flex-col items-center h-10/12 border- px-5 text-xl w-4/12 font-bold  '>
        <h1 className='mb-12 text-3xl'>Register Yourself</h1>
        <form>
          <label htmlFor='username'>
            UserName:
            <br />
            <input
              type='text'
              name='name'
              value={name}
              onChange={changeHandler}
              required
              placeholder='Enter your name'
            />
            {isNameValid ? (
              <span style={{ color: 'green' }}>{nameMessage}</span>
            ) : (
              <span style={{ color: 'red' }}>{nameMessage}</span>
            )}
          </label>
          <br />

          <label htmlFor='email'>
            Email:
            <br />
            <input
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
              
              // onChange ={}
              onChange={changeHandler}
              // onChange ={validateInputValue}
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

         
<div >
      <select className='bg-transparent' value={state} onChange={handleStateChange}>
        <option value="">Select state</option>
        {Object.keys(statesAndCities).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <select className='bg-transparent' value={city} onChange={handleCityChange}>
        <option value="">Select city</option>
        {statesAndCities[state]?.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
          <div>
            <button className={`bg-orange-500 px-5 my-3 py-2 rounded-lg w-full ${isNameValid && isEmailValid && isMobileValid && "hover:bg-orange-400 hover:scale-125 transition-all easy-in-out duration-500"}  ${!isNameValid && !isEmailValid && !isMobileValid && "cursor-not-allowed"}`} disabled={!isNameValid && !isEmailValid && !isMobileValid}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
