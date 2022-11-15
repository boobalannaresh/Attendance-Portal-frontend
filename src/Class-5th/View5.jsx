import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { Link, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { env } from "../config";


function View5() {

  const params = useParams();
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(...searchParams);

  const [userData, setUserData] = useState({})

  useEffect(() => {
    loadUser();
  }, [])

  let loadUser = async () => {
    try {
      let user = await axios.get(`${env.api}/class-5th/${params.id}`, {
        headers: {                                                           // Changes Here
          "authorization": window.localStorage.getItem("app-token")
        }
      });
      setUserData(user.data)
    } catch (error) {

    }
  }

  return (
    <div className='container shadow-lg p-3 mb-5 bg-body rounded'>

      <div className=' shadow-lg p-3 mb-5 bg-body rounded btn btn-sm btn-info mr-2'>
        <Link to="/portal/class-5th" className="d-none d-sm-inline-block btn btn-sm btn shadow-lg"><h6>Back</h6></Link>
      </div>

      <div className='row shadow-lg p-3 mb-5 bg-body rounded'>
      <h4>Roll_No: {userData.rollNo}</h4>
        <h4>Name: {userData.name}</h4>
        <h4>Date_Of_Birth: {userData.dateOfBirth}</h4>
        <h4>Grade: {userData.grade}</h4>
      </div>
      <div className='row shadow-lg p-3 mb-5 bg-body rounded'>
        
      </div>

    </div>
  )
}

export default View5