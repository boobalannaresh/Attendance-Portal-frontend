import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';
import { env } from "../config";

function Class1() {
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

    let userDelete = async (userid) => {
        try {
            let ask = window.confirm("Are you sure? Do you want to delete this data ?");
            if(ask){
                await axios.delete(`${env.api}/class-1st/${userid}`,{
                    headers : {
                        "authorization" : window.localStorage.getItem("app-token")
                    }
                })
                loadData();
            }
            
        } catch (error) {
            
        }
    }
  return (
    <div className="container mt-5 shadow-lg p-3 mb-5 bg-body rounded">

    {/* Loading code type Here */}

    <div className=' shadow-lg p-3 mb-5 bg-body rounded btn btn-sm btn-success mr-2'>
        <Link to="/portal/class-1st/attendance" className="d-none d-sm-inline-block btn btn-sm btn shadow-lg"><h6>Attendance</h6></Link>
    </div>

    <div className=' shadow-lg p-3 mb-5 bg-body rounded btn btn-sm btn-success mr-2'>
        <Link to="/portal/class-1st/create" className="d-none d-sm-inline-block btn btn-sm btn shadow-lg"><h6>Create_Student</h6></Link>
    </div>

    <div className="container">
        <div className="shadow-lg p-5  mb-5 bg-body rounded">
            <div className='row' >
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>
                                            <Link to={`/portal/class-1st/view/${user._id}`} className="shadow-lg p-1 bg-body rounded btn btn-sm btn-info mr-2 "><button className='btn btn-sm btn-sm shadow-lg'>View</button></Link>
                                            <Link to={`/portal/class-1st/edit/${user._id}`} className="shadow-lg p-1 bg-body rounded btn btn-sm btn-warning mr-2 "><button className='btn btn-sm btn-sm shadow-lg'>Edit</button></Link>
                                            <button onClick={() => userDelete(user._id )} className="shadow-lg p-1 bg-body rounded btn btn-sm btn-danger mr-2"><button className='btn btn-sm btn-sm shadow-lg'>Delete</button> </button>
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

export default Class1