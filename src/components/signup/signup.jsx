import React,{Component} from 'react'
import './signup.css'
import Axios from "axios";

export default class Signup extends Component{
    state = {
        username: null,
        password: null,
        status: 'seller',
        email: null,
        phone: null,
        success: null,
        fail: null
    }
    handleUserName = (e) => {
        const username = e.target.value;
        if(!username) return
        this.setState({username})
        e.target.value = this.state.username
    }
    handlePassword = (e) => {
        const password = e.target.value;
        if(!password) return
        this.setState({password})
        e.target.value = this.state.password
    }
    handleStatus = (e) => {
        const status = e.target.value;
        if(!status) return
        this.setState({status})
        e.target.value = this.state.status
    }
    handleEmail = (e) => {
        const email = e.target.value;
        this.setState({email})
        e.target.value = this.state.email
    }
    handlePhone = (e) => {
        const phone = e.target.value;
        this.setState({phone})
        e.target.value = this.state.phone
    }

    handleSignUp = (e) => {
       const {password,username,email,status,phone} = this.state
        if(!password || !username || !status) return
        console.log(password,username,status,email,phone)
        let params = new FormData()
        params.append("username",username)
        params.append("password",password)
        params.append("status",status)
        if(email)
        params.append("email",email)
        if(phone)
        params.append("phone",phone)

        this.setState({password:null,username:null,status:'seller',email:null,phone:null})

        const url = 'http://localhost:3000/user/register'
        const config = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }

        console.log('I come from sign up')

        Axios.post(url,params,config).
        then( response => {
            const res = response.data
            console.log(res)
            this.setState({success:res})
        }).catch( error => {
            this.setState({fail:error.message})
        })

    }

    render () {
        const {username,password,email,phone,success,fail} = this.state
        if(success)return <div style={{width:1100,height:500,float:'right',marginTop:200}}><h1 style={{color:'yellow',alignmentBaseline:'central'}}>{success}</h1></div>
        else if(fail)return <div style={{width:1100,height:500,float:'right',marginTop:200}}><h1 style={{color:'blue',alignmentBaseline:'central'}}>{fail}</h1></div>
        return (
            <div>
                <div className="page-wrapper bg-gra-01 p-t-100 p-b-100 font-poppins">
                    <div className="wrapper wrapper--w780" style={{marginTop:0,paddingTop:1}}>
                        <div className="card card-3" style={{width:800}}>
                            <div className="card-heading"></div>
                            <div className="card-body" >
                                <h2 className="title">Registration Info</h2>
                                <div >
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="UserName"
                                               name="username" value = {username} onChange={this.handleUserName}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3 js-datepicker" type="password"
                                               placeholder="Password" name="password"
                                               value = {password} onChange={this.handlePassword}/>
                                            <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                    </div>
                                    <div className="input-group">
                                        <div className="rs-select2 js-select-simple select--no-search">
                                            <select name="status" onChange={this.handleStatus}>
                                                <option>Seller</option>
                                                <option>Buyer</option>
                                            </select>
                                            <div className="select-dropdown"></div>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="email" placeholder="Email" name="email"
                                               value = {email} onChange={this.handleEmail}/>
                                    </div>
                                    <div className="input-group">
                                        <input className="input--style-3" type="text" placeholder="Phone" name="phone"
                                               value = {phone} onChange={this.handlePhone}/>
                                    </div>
                                    <div className="p-t-10">
                                        <button className="btn btn--pill btn--green" type="submit" onClick={this.handleSignUp}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}