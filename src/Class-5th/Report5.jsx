import React from 'react'
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { env } from "../config";

function Report5() {

    const params = useParams()
  
    const navigate = useNavigate()
  
    const formik = useFormik({
      initialValues: {
      attendance:""
  
      },
      validate: (values) => {
        let errors = {};
  
        if (values.attendance === "") {
          errors.attendance = "Please enter the Report";
        }
    
  
        return errors;
  
      },
      onSubmit: async (values) => {
        await axios.put(`${env.api}/class-5th/${params.id}`, values, {
          headers: {                                                              // Changes Here
            "authorization": window.localStorage.getItem("app-token")
          }
        })
        alert("Update the Report Successfully")
        navigate("/portal/class-5th/attendance")
      }
    });
  
    useEffect(() => {
      loadUser()
    }, [])
  
    let loadUser = async () => {
      try {
        let user = await axios.get(`${env.api}/class-5th/${params.id}`, {
          headers: {                                                          // Changes Here
            "authorization": window.localStorage.getItem("app-token")
          }
        });
        formik.setValues({
          attendance: user.data.attendance,
        })
      } catch (error) {
  
      }
  
    }
  
  
    return (
      <div className="container mt-5 ">
        <form onSubmit={formik.handleSubmit}>
          <div className="shadow-lg p-3 mb-5 bg-body rounded">
  
          <div className=' shadow-lg p-3 bg-body rounded btn btn-sm btn-warning mr-2'>
              <Link to="/portal/class-5th/attendance" className="d-none d-sm-inline-block btn btn-sm btn shadow-lg"><h6>Back</h6></Link>
            </div>
            
            <div className='row'>
             
              <div className="col-lg-6 shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
                <label><h6>Grade</h6> </label>
                <select className={`form-control ${formik.errors.attendance ? `input-error` : ``}`} value={formik.values.attendance} onChange={formik.handleChange} name="attendance" >
                  <option value="">--Please choose an option--</option>
                  <option className='form-control' value="Present" onChange={formik.handleChange} name="attendance">Present</option>
                  <option className='form-control' value="Absent" onChange={formik.handleChange} name="attendance">Absent</option>

                </select>
                <span style={{ color: "red" }}>{formik.errors.attendance}</span>
              </div>
  
              <div className="row-lg-2">
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
  
export default Report5