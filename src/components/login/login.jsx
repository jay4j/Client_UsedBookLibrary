import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
import {NavLink, Route, Switch, Redirect, Link} from 'react-router-dom'

import './login.css'
import PostAd from "../postAd/postAd";


export default class Login extends Component{

    state = {
        username: null,
        password: null,
        status: null,
    }

    login = () => {
        const {password,username} = this.state
        if(!password || !username) return
        let params = new FormData()
        params.append("username",username)
        params.append("password",password)

        const url = 'http://localhost:3000/user/login'
        const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded'} }

        Axios.post(url,params,config).
        then( response => {
            const res = response.data
            console.log(res)
            const status = res.entity.success
            const {token} = res.entity
            localStorage.clear()
            localStorage.setItem('myToken',token)
            this.setState({status})
            console.log('state......',this.state.status)
        })

   }
   handleUser = (e) => {
        const username = e.target.value;
        this.setState({username})
   }

   handlePassword = (e) => {
        const password = e.target.value;
        this.setState({password})
   }

    render () {
        const {status} = this.state
        if(status === true) return <PostAd/>
        else if(status === false) return <div style={{width:1100,height:500,float:'right',marginTop:200}}>
            <h1 style={{color:'red',alignmentBaseline:'central',fontSize:40}}>Sorry,failed to log in. Please try again</h1></div>
        else
        return (
            <div>
                <br/><br/><br/><br/><br/>
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card" style={{width:500}}>
                            <div className="card-header">
                                <h3>Sign In</h3>
                                <div className="d-flex justify-content-end social_icon">
                                    <span><i className="fab fa-facebook-square"></i></span>
                                    <span><i className="fab fa-google-plus-square"></i></span>
                                    <span><i className="fab fa-twitter-square"></i></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="username" onChange={this.handleUser}/>

                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="password" onChange={this.handlePassword}/>
                                    </div>
                                    <div className="row align-items-center remember">
                                        <input type="checkbox"/>Remember Me
                                    </div>
                                    <div className="form-group">
                                        <input type="button" value="Login" className="btn float-right login_btn" onClick={this.login}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    Don't have an account?<Link to={'/signup'}>Sign Up</Link>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="#">Forgot your password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}