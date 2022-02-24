import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import logo from '../nav/img/logo.png'

export default class Nav extends Component{

    submit = (e) =>{
        const name = this.input.value
        console.log(name)
    }

    render () {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <div className="container">
                        <img src={logo} height="80" alt="no img" />
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={"/login"}>Log In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/signup"}>Sign Up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/postAd"}>Post Ad</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/getAd"}>Get Ad</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/delete"}>Delete Ad</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/search"}>Search</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/logout"}>Log Out</Link>
                                    {/*<a className="nav-link" href="#">Logout</a>*/}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}