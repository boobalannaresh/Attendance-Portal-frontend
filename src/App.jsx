
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
import Attendance1 from './Class-1st/Attendance1';
import Report1 from './Class-1st/Report1';
import Create2 from './Class-2nd/Create2';
import View2 from './Class-2nd/View2';
import Edit2 from './Class-2nd/Edit2';
import Attendance2 from './Class-2nd/Attendance2';
import Report2 from './Class-2nd/Report2';
import Create3 from './Class-3rd/Create3';
import View3 from './Class-3rd/View3';
import Edit3 from './Class-3rd/Edit3';
import Attendance3 from './Class-3rd/Attendance3';
import Report3 from './Class-3rd/Report3';
import Create4 from './Class-4th/Create4';
import View4 from './Class-4th/View4';
import Edit4 from './Class-4th/Edit4';
import Report4 from './Class-4th/Report4';
import Attendance4 from './Class-4th/Attendance4';
import Create5 from './Class-5th/Create5';
import View5 from './Class-5th/View5';
import Edit5 from './Class-5th/Edit5';
import Attendance5 from './Class-5th/Attendance5';
import Report5 from './Class-5th/Report5';



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
                    <Route path="class-1st/create" element={<Create1 />} />
                    <Route path="class-1st/view/:id" element={<View1 />} />
                    <Route path="class-1st/edit/:id" element={<Edit1 />} />
                    <Route path="class-1st/attendance" element={<Attendance1 />} />
                    <Route path="class-1st/attendance/:id" element={<Report1 />} />

                    <Route path="class-2nd" element={<Class2 />} />
                    <Route path="class-2nd/create" element={<Create2 />} />
                    <Route path="class-2nd/view/:id" element={<View2 />} />
                    <Route path="class-2nd/edit/:id" element={<Edit2 />} />
                    <Route path="class-2nd/attendance" element={<Attendance2 />} />
                    <Route path="class-2nd/attendance/:id" element={<Report2 />} />
                    
                    <Route path="class-3rd" element={<Class3 />} />
                    <Route path="class-3rd/create" element={<Create3 />} />
                    <Route path="class-3rd/view/:id" element={<View3 />} />
                    <Route path="class-3rd/edit/:id" element={<Edit3 />} />
                    <Route path="class-3rd/attendance" element={<Attendance3 />} />
                    <Route path="class-3rd/attendance/:id" element={<Report3 />} />

                    <Route path="class-4th" element={<Class4 />} />
                    <Route path="class-4th/create" element={<Create4 />} />
                    <Route path="class-4th/view/:id" element={<View4 />} />
                    <Route path="class-4th/edit/:id" element={<Edit4 />} />
                    <Route path="class-4th/attendance" element={<Attendance4 />} />
                    <Route path="class-4th/attendance/:id" element={<Report4 />} />

                    <Route path="class-5th" element={<Class5 />} />
                    <Route path="class-5th/create" element={<Create5 />} />
                    <Route path="class-5th/view/:id" element={<View5 />} />
                    <Route path="class-5th/edit/:id" element={<Edit5 />} />
                    <Route path="class-5th/attendance" element={<Attendance5 />} />
                    <Route path="class-5th/attendance/:id" element={<Report5 />} />

                </Route>


            </Routes>
        </BrowserRouter>
    )
}

export default App