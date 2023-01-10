import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let [name,setName]=useState("")
    let [email,setemail]=useState("")
    let [age,setage]=useState("")
    let [phoneNumber,setphoneNumber]=useState("")

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()

        let userData={name,email,age,phoneNumber}
        fetch('http://localhost:2002/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('user added successfully')
        navigate('/admin/user-list')
    }

    return ( 
        <div>
            <h1>Users List</h1>
            <div className="form1">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name of the User"/>
                    </div>
                    <div className="email">
                        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} required placeholder="Enter Email-id" />
                    </div>
                    <div className="age">
                        <input type="number" min={6} value={age} onChange={(e)=>setage(e.target.value)} placeholder="Enter Age" />
                    </div>
                    <div className="phoneNo">
                        <input type="tel" minLength='10' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} maxLength={10} placeholder="Enter Phone Number" />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;