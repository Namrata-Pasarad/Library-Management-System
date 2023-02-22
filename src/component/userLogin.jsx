import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'

const UserLogin =()=>{
    let navigate=useNavigate()
    let login=()=>{
        navigate('/user/')
    }
    return(
        <div className="userLogin">
            <div className="form2">
                <h1>Login as User</h1>
                <div className="form_input">
                    <form action="" onSubmit={login}>
                       <div className="email">
                       <label htmlFor="">Enter Email Address:</label>
                        <input type="email" required placeholder="Email address" className="" />
                       </div>
                       <div className="password">
                        <label htmlFor="">Enter Password:</label>
                        <input type="password" required placeholder="Enter password"/>
                       </div>
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>
        </div>


    )
}
export default UserLogin;