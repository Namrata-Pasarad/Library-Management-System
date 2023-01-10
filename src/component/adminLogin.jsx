import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css"

const AdminLogin =() =>{
    let [email,setEmail]=useState("")
    let[password,setPassword]=useState("")
    let navigate=useNavigate()

    let login=(e)=>{
        e.preventDefault();
        let data={email,password} //data from i/p

        //admin validation
        if (email=='admin@gmail.com' && password=="namz") {
            navigate('/admin/')
        } else {
            alert('invalid credentials')
        }

    }
    return(
        <div className="adminLogin">
            <div className="form">
                <h1>Login as Admin</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                       <div className="email">
                       <label htmlFor="">Enter Email Address:</label>
                        <input type="email" required placeholder="Email address" className="" 
                        value={email} onChange={(e)=>setEmail(e.target.value)}/>
                       </div>
                       <div className="password">
                        <label htmlFor="">Enter Password:</label>
                        <input type="password" required placeholder="Enter password" 
                        value={password} onChange={(e)=>setPassword(e.target.value)}/>
                       </div>
                       <button className="btn1">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin;