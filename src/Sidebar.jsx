import React from 'react'
import "./App.css";
import { Link } from "react-router-dom";

function Sidebar() {
    return (

        <div className='Sidebar'>
            <div class="sidebar">
                <Link to="/portal/home" className="active" href="#home">Home</Link>
                 <Link to="/portal/class-1st">Class 1st</Link> 
                 <Link to="/portal/class-2nd">Class 2nd</Link> 
                 <Link to="/portal/class-3rd">Class 3rd</Link> 
                 <Link to="/portal/class-4th">Class 4th</Link> 
                 <Link to="/portal/class-5th">Class 5th</Link> 
            </div>
        </div>
       

    )
}

export default Sidebar