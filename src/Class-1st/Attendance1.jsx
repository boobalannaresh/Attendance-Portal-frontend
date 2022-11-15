import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';
import { env } from "../config";



function Attendance1() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        loadData()
    }, []);

    let loadData = async () => {
        setLoading(true)
        let users = await axios.get(`${env.api}/class1-all`, {
            headers: {
                "authorization": window.localStorage.getItem("app-token")
            }
        });
        //Do you know, which place users.data, go Check console before plz code console.log(users) after check
        console.log(users)
        setUsers(users.data)
        setLoading(false)
    }

  return (
    <div className="container mt-5 shadow-lg p-3 mb-5 bg-body rounded">

    {/* Loading code type Here */}

    <div className="container">
        <div className="shadow-lg p-5  mb-5 bg-body rounded">
            <div className='row' >
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Attendance</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.attendance}</td>
                                        <td>
                                            <Link to={`/portal/class-1st/attendance/${user._id}`} className="shadow-lg p-1 bg-body rounded btn btn-sm btn-warning mr-2 "><button className='btn btn-sm btn-sm shadow-lg'>Report</button></Link>
                                            
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

  )
}


export default Attendance1

