import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/userList.css'

const UserList = () => {
    let [users,setUsers]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:2002/users')
            let data=await response.json()
            setUsers(data)
        }
        fetchData()
    },[users])
    
    let handleDelete=(id,name)=>{
        fetch(`http://localhost:2002/users/${id}`,{
        method:'DELETE'
    
        });

        // setUsers(users.filter(x=>x.id!=id))
         alert(`${name} has been deleted`)
    }
    
    
    return (  
        <div className="userList">
            <h1>User List</h1>
            <div className="user_section">
            {users.map((data)=>(
                   <div className="userCard">
                    <h2 style={{color:"darkblue"}}>Name: {data.name}</h2> 
                    <h5>Age: {data.age}</h5>
                    <h5>Email: {data.email}</h5>
                    <button onClick={()=>{handleDelete(data.id,data.name)}}>Delete</button>
                   </div> 
                ))}

            </div>
        </div>
    );
}
 
export default UserList;
