import React from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
import { env } from "./config";

function ForgetPassword() {


  const params = useParams()

  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate : (values) => {
      let errors = {};

      if (values.email === ""){
        errors.email= "Please enter Position";
      }

      if (values.password === ""){
        errors.password= "Please enter Position";
      }

      return errors;

    },
    onSubmit: async (values) => { 
      let user = await axios.put(`${env.api}/forgot/${params.id}`, values)
      alert("Successfully Changed your Password");
      navigate("/")

    }
  });

  return (
    <div className='login'>
    <div className='allLogin'>
      <div className='bodyLogin'>
        <div className='box'>
          <div className='form'>
            <h2>Forgot_Password</h2>
            <form onSubmit={formik.handleSubmit}>

            <div className='inputBox'>
              <input type="email" required="required" class='form-control-user' value={formik.values.email} onChange={formik.handleChange} name="email"/>
              <span>E-mail id</span>
              <i></i>
            </div>

            
            <div className='inputBox'>
            <input type="password" required="required" class='form-control-user' value={formik.values.password} onChange={formik.handleChange} name="password" />

              <span>New Password</span>
              <i></i>
            </div>
           
            <button type="submit"  class="form-control-user">Submit </button>

            </form>

            <p className='back'>Already hava an account ? <Link to="/">Login</Link></p>
            
          </div>

        </div>

      </div>


    </div>
  </div>
  )
}

export default ForgetPassword