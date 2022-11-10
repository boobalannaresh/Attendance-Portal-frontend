
import React from 'react'
import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ForgetPassword from './ForgetPassword';
import Login from './Login';
import SignUp from './SignUp';
import Portal from './Portal';
import Class1 from './Class-1st/Class1';
import Class2 from './Class-2nd/Class2';
import Class3 from './Class-3rd/Class3';
import Class4 from './Class-4th/Class4';
import Class5 from './Class-5th/Class5';
import Home from './Home';
import View1 from './Class-1st/View1';
import Edit1 from './Class-1st/Edit1';
import Create1 from './Class-1st/Create1';
import Attendance from './Class-1st/Attendance';



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/portal" element={<Portal />} >
                <Route path="home" element={<Home />} />
                    <Route path="class-1st" element={<Class1 />} />
                    <Route path="class-1st/attendance" element={<Attendance />} />
                    <Route path="class-1st/create" element={<Create1 />} />
                    <Route path="class-1st/view/:id" element={<View1 />} />
                    <Route path="class-1st/edit/:id" element={<Edit1 />} />
                    


                    <Route path="class-2st" element={<Class2 />} />
                    <Route path="class-3st" element={<Class3 />} />
                    <Route path="class-4st" element={<Class4 />} />
                    <Route path="class-5st" element={<Class5 />} />




                </Route>


            </Routes>
        </BrowserRouter>
    )
}

export default App