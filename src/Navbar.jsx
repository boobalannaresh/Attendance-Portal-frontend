import React from 'react'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';


function Navbar() {

    let navigate = useNavigate();
    let logout = () => {
        navigate("/")
    }

    return (
       <div className='Navbar'>        
        <nav class="navbar navbar-expand-lg navbar-light bg-success fixed-top">
        <a class="navbar-brand text-light" href="#" ><h3>Primary School</h3></a>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
               
                
            </div>
            <div className='col-lg-ml-1'>
                    <div className=' shadow-lg p-1  bg-body rounded btn btn-sm btn-danger mr-2'>
                        <button onClick={ logout } className="d-none d-sm-inline-block btn btn-sm btn shadow-lg" ><h6>Log_out</h6></button>
                    </div>
                </div>
        </nav>
        </div>

    )
}

export default Navbar