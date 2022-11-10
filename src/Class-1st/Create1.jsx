
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { env } from "../config";
import { useNavigate } from 'react-router-dom';

function Create1() {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            name: ""
          
        },
        validate: (values) => {
            let errors = {};

            if (values.name === "") {
                errors.name = "Please enter the Name";
            }

            return errors;

        },
        onSubmit: async (values) => {
            let user = await axios.post(`${env.api}/class-1st`, values, {
                headers: {                                                      // Changes Here
                    "authorization": window.localStorage.getItem("app-token")
                }
            })
            alert("New Notes has been Created Done");
            navigate("/portal/class-1st")
        }
    });
  return (
    <div className="container  ">
            <form onSubmit={formik.handleSubmit}>
                <div className="shadow-lg p-5 mb-5 bg-body rounded ">
                    <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
                        <label><h6>Name</h6> </label>
                        <input className='form-control' type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name" ></input>
                        <span style={{ color: "red" }}>{formik.errors.name}</span>
                    </div>
                    <div className=' shadow-lg p-3 mb-5 bg-body rounded btn btn-sm btn-success mr-2'>
                        <input className='btn btn-success shadow-lg ' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default Create1