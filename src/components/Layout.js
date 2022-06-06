import {Outlet, Link} from "react-router-dom";
import React, { Component }  from 'react';
import classes from './LayoutStyle.css';

export default function Layout(props) {

    return (
        <div>
            <article
                style={{backgroundImage: `url('https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2022-03/coronavirus.jpg?itok=jB3Tjp08')`}}>
                <h1 >Register</h1>
                <br/>
                <br/>
            </article>
            <nav className="nav nav-pills nav-fill bg-light">
                <Link className="nav-item nav-link" to="/register"><strong>Registration Form</strong></Link>
                <Link className="nav-item nav-link" to="/info"><strong>Information Form</strong></Link>
            </nav>
            <Outlet/>
        </div>
    )
}
