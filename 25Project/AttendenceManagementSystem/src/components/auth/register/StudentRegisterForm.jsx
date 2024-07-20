import { Button, Stack, TextField } from '@mui/material'
import React from 'react'

const StudentRegisterForm = ({register, errors, watchedValue, setValue}) => {
  return (
    <div>
         <Stack spacing={2} width={400}>
                <TextField
                  label="Name"
                  type='text'
                  {...register("name", { required: "Please insert name" })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  value={watch().name || ""}
                  onChange={(e) => setValue('name', e.target.value)}
                />
                <TextField
                  label="Email"
                  type='email'
                  {...register("email", { required: "Email is required" })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  value={watch().email || ""}
                  onChange={(e) => setValue('email', e.target.value)}
                />
                <TextField
                  label="Password"
                  type='password'
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: "Password is invalid"
                    }
                  })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  value={watch().password || ""}
                  onChange={(e) => setValue('password', e.target.value)}
                />
                <TextField
                  label="DOB"
                  type='date'
                  {...register("dob", { required: "DOB is required" })}
                  error={!!errors.dob}
                  helperText={errors.dob?.message}
                  value={watch().dob || ""}
                  onChange={(e) => setValue('dob', e.target.value)}
                />
                <Button type='submit' color='primary' variant='contained'>Register Student</Button>
              </Stack>
    </div>
  )
}

export default StudentRegisterForm