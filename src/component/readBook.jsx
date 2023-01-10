import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const ReadBook = (props) => {
    let [book,setBook]=useState([])

    //to get riute parameter
    let params=useParams()

    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch(`http://localhost:2002/books/${params.id}`)
            let data=await response.json();
            setBook(data)
        }
        fetchData()
    },[])
    return ( 
        <div className="readBook">
           <div className="card">
            <h2>{book.title}</h2>
            <div className="card-footer">
                <p>{book.shortDescription}</p>
                <p>{book.longDescription}</p>
            </div>
           </div>

        </div>
     );
}
 
export default ReadBook;