import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './components/Layout'
import NoPage from './components/NoPage'
import RegistrationForm from "./components/RegistrationForm";
import InfoForm from "./components/InfoForm"
import React, { Component }  from 'react';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<RegistrationForm/>}/>
                        <Route path="register" element={<RegistrationForm/>}/>
                        <Route path="info" element={<InfoForm/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
