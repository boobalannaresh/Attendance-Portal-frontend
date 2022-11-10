import React from 'react'
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { env } from "../config";


function EditNotes() {

  const params = useParams()

  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: ""
     
    },
    validate: (values) => {
      let errors = {};

      if (values.name === "") {
        errors.name= "Please give the title";
      }

      return errors;

    },
    onSubmit: async (values) => {
      await axios.put(`${env.api}/class-1st/${params.id}`, values,{
        headers : {                                                              // Changes Here
          "authorization" : window.localStorage.getItem("app-token")
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
      let user = await axios.get(`${env.api}/class-1st/${params.id}`,{
        headers : {                                                          // Changes Here
          "authorization" : window.localStorage.getItem("app-token")
      }
      });
      formik.setValues({
        name: user.data.name,
       
      })
    } catch (error) {

    }

  }


  return (
    <div className="container mt-5 ">
    <form onSubmit={formik.handleSubmit}>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
            <div className="shadow-lg p-3 mb-5 bg-body rounded mb-3 mt-5">
                <label>Title</label>
                <input className='form-control' type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name" ></input>
                <span style={{ color: "red" }}>{formik.errors.name}</span>
            </div>
           
            <div className=' shadow-lg p-3 mb-5 bg-body rounded btn btn-sm btn-warning mr-2'>
                <input className='btn btn-warning shadow-lg ' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
            </div>
        </div>
    </form>
</div>
  )
}

export default EditNotes