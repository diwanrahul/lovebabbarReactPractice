import { Button, TextField, Stack, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup, InputLabel, Select, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, getValues, watch, setValue } = useForm({
    defaultValues: {
      role: "student",
      name: "",
      email: "",
      password: "",
      dob: "",
      designation: ""
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // Set initial values to avoid uncontrolled to controlled warnings
  useEffect(() => {
    setValue('role', 'student');
    setValue('name', '');
    setValue('email', '');
    setValue('password', '');
    setValue('dob', '');
    setValue('designation', '');
  }, [setValue]);

  const role = watch().role === "student" ? "student" : "staff";
  console.log("values=>", getValues().role);

  return (
    <div className='flex justify-center mt-10'>
      <div className='border border-violet-700 py-10 px-6 rounded-md'>
        <div className='mb-3 text-2xl'>
          <h1>Register</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel id="role-label">Are you :</FormLabel>
            <RadioGroup
              aria-labelledby="role-label"
              name="role"
              value={watch().role}
              onChange={(e) => setValue('role', e.target.value)}
            >
              <div>
                <FormControlLabel value="student" control={<Radio />} label="Student" />
              <FormControlLabel value="staff" control={<Radio />} label="Staff" />
              </div>
              
            </RadioGroup>
          </FormControl>

          <div>
            {role === "student" ? (
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
            ) : (
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
                <FormControl fullWidth>
                  <InputLabel id="designation-label">Designation</InputLabel>
                  <Select
                    labelId="designation-label"
                    id="designation"
                    label="Designation"
                    {...register("designation")}
                    value={watch().designation || ""}
                    onChange={(e) => setValue('designation', e.target.value)}
                  >
                    <MenuItem value="principal">Principal</MenuItem>
                    <MenuItem value="teacher">Teacher</MenuItem>
                    <MenuItem value="peon">Peon</MenuItem>
                  </Select>
                </FormControl>
                <Button type='submit' color='primary' variant='contained'>Register Staff</Button>
              </Stack>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
