import "../App.css";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { env } from "../config";
import { useNavigate } from 'react-router-dom';

function Create2() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            rollNo:"",
            name: "",
            dateOfBirth:"",
            grade:"",
            attendance:""
  
        },
        validate: (values) => {
            let errors = {};

            if (values.rollNo === "") {
                errors.rollNo = "Please enter the Roll No";
            }
            if (values.name === "") {
                errors.name = "Please enter the Name";
            }
            if (values.dateOfBirth === "") {
                errors.dateOfBirth = "Please enter the Date_Of_Birth";
            }
            if (values.grade === "") {
                errors.grade = "Please enter the Grade";
            }
        
           

            return errors;

        },
        onSubmit: async (values) => {
            let user = await axios.post(`${env.api}/class-2nd`, values, {
                headers: {                                                      // Changes Here
                    "authorization": window.localStorage.getItem("app-token")
                }
            })
            alert("New Student has been Created ");
            navigate("/portal/class-2nd")
        }
    });
  return (
    <div className="container  ">
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
              
                    <div className=" col-lg-6 shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
                        <label><h6>Roll_No</h6> </label>
                        <input className={`form-control ${formik.errors.rollNo ? `input-error` : ``}`} type={"number"} value={formik.values.rollNo} onChange={formik.handleChange}  name="rollNo" min="0" max="20"></input>
                        <span style={{ color: "red" }}>{formik.errors.rollNo}</span>
                    </div>
                    <div className="col-lg-6 shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
                        <label><h6>Name</h6> </label>
                        <input className={`form-control ${formik.errors.name ? `input-error` : ``}`} type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name" ></input>
                        <span style={{ color: "red" }}>{formik.errors.name}</span>
                    </div>
                    <div className="col-lg-6 shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
                        <label><h6>Date_of_Birth</h6> </label>
                        <input className={`form-control ${formik.errors.dateOfBirth ? `input-error` : ``}`} type={"date"} value={formik.values.dateOfBirth} onChange={formik.handleChange} name="dateOfBirth" ></input>
                        <span style={{ color: "red" }}>{formik.errors.dateOfBirth}</span>
                    </div>
                    <div className="col-lg-6 shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
                        <label><h6>Grade</h6> </label>
                        <select className={`form-control ${formik.errors.grade ? `input-error` : ``}`} value={formik.values.grade} onChange={formik.handleChange} name="grade" >
                            <option value="">--Please choose an option--</option>
                            <option className='form-control'  value="1st" onChange={formik.handleChange} name="grade">1st</option>
                            <option className='form-control'  value="2nd" onChange={formik.handleChange} name="grade">2nd</option>
                            <option className='form-control' value="3rd" onChange={formik.handleChange} name="grade">3rd</option>
                            <option className='form-control'  value="4th" onChange={formik.handleChange} name="grade">4th</option>
                            <option className='form-control'  value="5th" onChange={formik.handleChange} name="grade">5th</option>
                        </select>
                        <span style={{ color: "red" }}>{formik.errors.grade}</span>
                    </div>

                    <div className="col-lg-6">
                    <div className=' shadow-lg p-3 mb-5 bg-body rounded btn btn-sm btn-success mr-2'>
                        <input className='btn btn-success shadow-lg ' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
                    </div>
                    </div>
                    
               
                </div>
            </form>
        </div>
  )
}

export default Create2