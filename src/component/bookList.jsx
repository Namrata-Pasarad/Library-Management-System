import { useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import'../styles/bookList.css'

const BookList = () => {
    let [books,setBooks]=useState([])

    //to fetch route value
    let location =useLocation()

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch('http://localhost:2002/books')
            let data=await response.json()
            setBooks(data)
        }
        fetchData()
    },[books])
    
     let handleDelete=(id,title)=>{
    fetch(`http://localhost:2002/book/${id}`,{
        method:'DELETE'
       })
       alert(`${title} will be deleted permanently`)
   }
   let navigate=useNavigate()
   let read=(id)=>{
   if(location.pathname == '/admin/book-list'){
       navigate(`/admin/book-list/${id}`)
   }
   else
   {
      navigate(`/user/book-list/${id}`)
   }
}


    return ( 
        <div className="booklist">
            <h1>Book List: {books.length}</h1>
            <div className="book_section">
                {books.map((data)=>(
                   <div className="bookCard">
                   <div className="bookCard_img"> <img height={200} src={data.thumbnailUrl} alt="" />
                   </div>
                    <div className="bookCard_detail">
                    <h2 style={{color:"darkblue"}}>Title: {data.title}</h2> 
                    <h4>Authors: {data.authors.toString()}</h4>
                    <h4>Pagecount: {data.pageCount}</h4>
                    <button onClick={()=>read(data.id)} >Read More</button>
                    {/* <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button> */}
                    {location.pathname==`/admin/book-list` && <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button>}
                    </div>
                   </div> 
                ))}
            </div>
        </div>
     );
}
 
export default BookList;







   
                