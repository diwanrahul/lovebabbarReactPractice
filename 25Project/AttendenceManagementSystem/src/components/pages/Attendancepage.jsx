import React, { useState } from "react";
import {
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import { useForm } from "react-hook-form";

const Attendancepage = () => {
    
    const [studentList, setStudentList] = useState([
        {
            roll: 0,
            name: "Rahul",
            isPresent: false,
        },
        {
            roll: 1,
            name: "Rahul",
            isPresent: false,
        },
        {
            roll: 2,
            name: "Rahul",
            isPresent: false,
        },
        {
            roll: 3,
            name: "Rahul",
            isPresent: false,
        },
    ]);
    const { register, handleSubmit, watch } = useForm();

    const handleAttendance = (roll) => {
        const updatedList = studentList.map((student) => {
            if (student.roll === roll) {
                return { ...student, isPresent: !student.isPresent };
            }
            return student;
        });
        setStudentList(updatedList);
    }

    return (
        <div className="flex justify-between border h-screen">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 w-3/12 border border-red-700">
                <ul>
                    <li>hjk</li>
                    <li>fdfd</li>
                    <li>afaf</li>
                    <li>fadfd</li>
                </ul>
            </div>

            <div className="flex flex-col gap-5 border border-blue-800 p-5 w-11/12">
             <div>
                <h1 className="text-2xl">Student Attenance</h1>
             </div>
                <form>
                  
                    <div className="flex flex-col border border-red-600 gap-5 p-5">
                        <div className="flex justify-between ">
                            <div className="flex flex-col items-start">
                                <label htmlFor="class">Class</label>
                                <select name="class">
                                    <option value="">Select</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="division">Division</label>
                                <select name="division">
                                    <option value="">Select</option>
                                    <option value="9">hkh</option>
                                    <option value="10">ffd</option>
                                    <option value="11">fesf</option>
                                    <option value="12">fefsd</option>
                                </select>
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="attendance-date">Attendance Date</label>
                                <input type="date" name="attendance-date" />
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="subject">Subject</label>
                                <select name="subject">
                                    <option value="">Select</option>
                                    <option value="math">math</option>
                                    <option value="chemistry">chemistry</option>
                                    <option value="physics">physics</option>
                                    <option value="bio">bio</option>
                                </select>
                            </div>
                            <div className="flex flex-col items-start">
                                <label htmlFor="period-no">Period No.</label>
                                <select name="period-no">
                                    <option value="">Select</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <table className="w-[100%] flex flex-col">
                            <thead className="border border-b-red-700 p-3 flex justify-around w-[100%]">
                                <tr className="flex justify-around w-[100%]">
                                    <th>Roll no.</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentList &&
                                    studentList.map((student) => (
                                        <tr key={student.roll} className={`border border-red-900 flex justify-around w-[100%]
                                         ${student.isPresent ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
                                            <td>{student.roll}</td>
                                            <td>{student.name}</td>
                                            <td >
                                                <FormControl>
                                                    <RadioGroup
                                                        aria-labelledby="role-label"
                                                        name={`role-${student.roll}`}
                                                        value={student.isPresent ? "present" : "absent"}
                                                        onChange={() => handleAttendance(student.roll)}
                                                        
                                                    >
                                                        <div className="flex">
                                                        <FormControlLabel
                                                            value="present"
                                                            control={<Radio />}
                                                            label="P"
                                                        />
                                                        <FormControlLabel
                                                            value="absent"
                                                            control={<Radio />}
                                                            label="A"
                                                        />
                                                        </div>
                                                    </RadioGroup>
                                                </FormControl>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-300 px-3 py-1 rounded-md mt-3 hover:bg-blue-600 hover:text-white transition-all">
                            {" "}
                            &#10004; Submit Attendance
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Attendancepage;
