import React,{Component} from 'react'
import Axios from 'axios'

export default class Logout extends Component{
    state = {
        success: null
    }

    componentDidMount() {
        const url = 'http://localhost:3000/user/logout'
        const token = localStorage.getItem('myToken')
        console.log('token----->',token)
        const config = { headers: {'token':`${token}`}}
        Axios.get(url,config)
             .then(response => {
                 const res = response.data
                 const success = res
                 console.log(res,'logout----------------')
                 this.setState({success})
             })
    }

    render () {
        const{success} = this.state
        if(success){
            return (
                <div style={{width:1100,height:500,float:'right',marginTop:200}}>
                    <h1 style={{color:'yellowgreen',alignmentBaseline:'central'}}>{success}</h1>
                </div>
            )
        }
       else
            return (
                <div style={{width:1100,height:500,float:'right',marginTop:200}}>
                    <h1 style={{color:'yellowgreen',alignmentBaseline:'central'}}>You have failed to log out</h1>
                </div>
            )
    }
}