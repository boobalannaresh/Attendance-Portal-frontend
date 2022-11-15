import React from 'react'
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { env } from "../config";


function Edit1() {

  const params = useParams()

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      rollNo: "",
      name: "",
      dateOfBirth: "",
      grade: ""

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
      await axios.put(`${env.api}/class-1st/${params.id}`, values, {
        headers: {                                                              // Changes Here
          "authorization": window.localStorage.getItem("app-token")
        }
      })
      alert("Update has been Done")
      navigate("/portal/class-1st")
    }
  });

  useEffect(() => {
    loadUser()
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`${env.api}/class-1st/${params.id}`, {
        headers: {                                                          // Changes Here
          "authorization": window.localStorage.getItem("app-token")
        }
      });
      formik.setValues({
        rollNo: user.data.rollNo,
        name: user.data.name,
        dateOfBirth: user.data.dateOfBirth,
        grade: user.data.grade,

      })
    } catch (error) {

    }

  }


  return (
    <div className="container mt-5 ">
      <form onSubmit={formik.handleSubmit}>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">

        <div className=' shadow-lg p-3 bg-body rounded btn btn-sm btn-warning mr-2'>
            <Link to="/portal/class-1st" className="d-none d-sm-inline-block btn btn-sm btn shadow-lg"><h6>Back</h6></Link>
          </div>
          
          <div className='row'>
            <div className=" col-lg-6 shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
              <label><h6>Roll_No</h6> </label>
              <input className={`form-control ${formik.errors.position ? `input-error` : ``}`} type={"number"} value={formik.values.rollNo} onChange={formik.handleChange} name="rollNo" min="0" max="20"></input>
              <span style={{ color: "red" }}>{formik.errors.rollNo}</span>
            </div>
            <div className="col-lg-6 shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
              <label><h6>Name</h6> </label>
              <input className={`form-control ${formik.errors.position ? `input-error` : ``}`} type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name" ></input>
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
            <div className="col-lg-6 shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
              <label><h6>Date_of_Birth</h6> </label>
              <input className={`form-control ${formik.errors.position ? `input-error` : ``}`} type={"date"} value={formik.values.dateOfBirth} onChange={formik.handleChange} name="dateOfBirth" ></input>
              <span style={{ color: "red" }}>{formik.errors.dateOfBirth}</span>
            </div>
            <div className="col-lg-6 shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
              <label><h6>Grade</h6> </label>
              <select className={`form-control ${formik.errors.position ? `input-error` : ``}`} value={formik.values.grade} onChange={formik.handleChange} name="grade" >
                <option value="">--Please choose an option--</option>
                <option className='form-control' value="1st" onChange={formik.handleChange} name="grade">1st</option>
                <option className='form-control' value="2nd" onChange={formik.handleChange} name="grade">2nd</option>
                <option className='form-control' value="3rd" onChange={formik.handleChange} name="grade">3rd</option>
                <option className='form-control' value="4th" onChange={formik.handleChange} name="grade">4th</option>
                <option className='form-control' value="5th" onChange={formik.handleChange} name="grade">5th</option>
              </select>
              <span style={{ color: "red" }}>{formik.errors.grade}</span>
            </div>

            <div className="col-lg-6">
              <div className=' shadow-lg p-3 mb-5 bg-body rounded btn btn-sm btn-warning mr-2'>
                <input className='btn btn-warning shadow-lg ' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Edit1