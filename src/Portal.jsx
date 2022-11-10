import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from "react-router-dom";

function Portal() {
    return (
        <div>
            <div className='Navbar'>
            <Navbar></Navbar>
            </div> 
            <Sidebar></Sidebar>
            <Outlet />
        </div>
    )
}

export default Portal