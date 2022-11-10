import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
import { env } from "./config";

function SignUp() {

  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validate : (values) => {
      let errors = {};

      if (values.username === "" ){
        errors.name = "Please enter username";
      }

      if (values.email === ""){
        errors.email= "Please enter Position";
      }

      if (values.password === ""){
        errors.password= "Please enter Position";
      }

      return errors;

    },
    onSubmit: async (values) => { 
      let user = await axios.post(`${env.api}/register`, values)
      alert("Register Successfully");
      navigate("/")

    }
  });

  return (
    <div className='login'>
      <div className='allLogin'>
        <div className='bodyLogin'>
          <div className='box'>
            <div className='form'>
              <h2>Register</h2>
              <form onSubmit={formik.handleSubmit}>
              <div className='inputBox'>
              <input type="text" required="required"  class='form-control-user' value={formik.values.username} onChange={formik.handleChange} name="username" />
                <span>Username</span>
                <i></i>
              </div>

              <div className='inputBox'>
              <input type="email" required="required"  class='form-control-user' value={formik.values.email} onChange={formik.handleChange} name="email" />
                <span>E_mail</span>
                <i></i>
              </div>

              <div className='inputBox'>
              <input type="password" required="required"  class='form-control-user' value={formik.values.password} onChange={formik.handleChange} name="password" />
                <span>Password</span>
                <i></i>
              </div>

              <button type="submit"  class="form-control-user">Submit </button>

              <p className='back'>Already hava an account ? <Link to="/">Login</Link></p>
              </form>
            </div>
            

          </div>

        </div>


      </div>
    </div>
  )
}

export default SignUp