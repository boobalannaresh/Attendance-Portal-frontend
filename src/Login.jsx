import React from 'react'
import "./App.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { env } from './config';
import axios from 'axios';

function Login() {

  let navigate = useNavigate();

  let formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(`${env.api}/login`, values)
        if (loginData.data.message === "Successfully Login") {
          window.localStorage.setItem("app-token", loginData.data.token)
          window.localStorage.setItem("email", loginData.data.email)
          alert("Successfully Login")
          navigate("/portal/home")
        } else {
          alert("E-mail / Password is wrong")
        }

      } catch (error) {
        alert(error.response.data.message)
        console.log(error);
      }
    },
  })
  return (
    <div className='login'>
      <div className='allLogin'>
        <div className='bodyLogin'>
          <div className='box'>
            <div className='form'>
              <h2>Login</h2>

              <form class="user" onSubmit={formik.handleSubmit}>
                <div class='inputBox'>
                  <input type="email" required="required" class='form-control-user' value={formik.values.email} onChange={formik.handleChange} name="email" />
                  <span>E_mail</span>
                  <i></i>
                </div>

                <div class='inputBox'>
                  <input type="password" required="required" class='form-control-user' value={formik.values.password} onChange={formik.handleChange} name="password" />
                  <span>Password</span>
                  <i></i>
                </div>

                <div class='links'>
                  <Link className="a" to="/forget-password"> <p>Forgot Password</p> </Link>
                  <Link className="a" to="/signup"> <p>SignUp</p> </Link>
                </div>

                <button type="submit" class="form-control-user">Login </button>

              </form>


            </div>

          </div>

        </div>


      </div>
    </div>
  )
}

export default Login