import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addBook.css'

const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumnailUrl
    let [title,setTitle]=useState("")
    let [authors,setauthors]=useState("")
    let [categories,setcategorie]=useState("")
    let [pageCount,setpageCount]=useState("")
    let [shortDescription,setshortDescription]=useState("")
    let [longDescription,setlongDescription]=useState("")
    let [thumnailUrl,setthumnailUrl]=useState("")

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();
        //data to be posted
        let bookData={title,categories,authors,pageCount,shortDescription,longDescription,thumnailUrl}

        // posting to the server
        fetch(`http://localhost:2002/books`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book added successfully')
        navigate('/admin/book-list')
    }

    return (
        <div className="addBook">
            <h1>Add a Book</h1>
            <div className="form1">
                <form action="" className="form-group" onSubmit={handleSubmit}>
                    <div className="title">
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required placeholder="Title of the Book" />
                    </div>
                    <div className="authors">
                        <input type="text" value={authors} onChange={(e)=>setauthors(e.target.value)} required placeholder="Authors of the Book" />
                    </div>
                    <div className="categories">
                        <input type="text" value={categories} onChange={(e)=>setcategorie(e.target.value)} required placeholder="Categories" />
                    </div>
                    <div className="pageCount">
                        <input type="number" value={pageCount} onChange={(e)=>setpageCount(e.target.value)} required placeholder="Number of the Pages" />
                    </div>
                    <div className="shortDescription">
                        <textarea name="" value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)}  type="text" id="" cols="30" rows="10" placeholder="Short Descriptin"></textarea>
                    </div>
                    <div className="longDescription ">
                        <textarea name="" value={longDescription} onChange={(e)=>setlongDescription(e.target.value)} type="text" id="" cols="30" rows="10" placeholder="Long Descriptin"></textarea>
                    </div>
                    <div  className="thumnailUrl" >
                        <input type="text" value={thumnailUrl} onChange={(e)=>setthumnailUrl(e.target.value)} placeholder="thumnailUrl" />
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;
