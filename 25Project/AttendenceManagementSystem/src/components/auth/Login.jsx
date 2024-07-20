
import { Button, TextField, Stack } from '@mui/material'
import {  useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../features/auth/auth';
import { useNavigate } from 'react-router';

const Login = () => {
    const isLoggedin = useSelector((state)=>state.login.isLoggedin);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit= (data)=>{
        if( data && !isLoggedin){
            dispatch(userLogin());
        }
        console.log(data)
        navigate("/attendance");
    }
  return (
    <div className='flex justify-center mt-10'>
        <div className='border border-violet-700 py-10 px-6 rounded-md'>
            <div className='mb-3 text-2xl'>
                <h1>Login</h1>
            </div>
        <form onSubmit={handleSubmit(onSubmit)} >
        <Stack spacing={2} width={400}  >
            <TextField 
            label="Username"
            type='text'
            {...register("username",{
                required:"Username is required"                
            })}
            error ={!!errors.username}
            helperText={errors.username?.message}
            />
           {/* {errors.username && errors.username.type === "required" && (
            <p className="text-red-500">Username is required.</p>
          )} */}
            <TextField 
            label="Password"
            type='password'
            {...register("password",{
                required:"Password is required",
                pattern:{
                    value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:"password is invalid"
                }
            })}
            error = {!!errors.password}
            helperText={errors.password?.message}
            />
            <Button
            type='submit' color='primary' variant='contained' >Login</Button>
        </Stack>
            
        </form>
        </div>
    </div>
  )
}

export default Login