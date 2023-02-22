import "../styles/adminDashboard.css"

const AdminDashboard = () => {
    return ( 

        <div className="adminHome">
            <h1 style={{color:'darkblue'}}>WELCOME TO ADMIN HOME PAGE</h1>
            <div className="one">
                <img src="https://media.istockphoto.com/id/639392022/vector/bookshelves-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1DNOwFJabnlqHzShnSHfWOsNBUTtIaOgFBcpGQO_-oQ=" height="300" width="850" alt="" />
                <div className="one_text">
                <h1 style={{color:'darkblue'}}>At the Library this December.....</h1> <hr color="skyblue" width="500px"/>
                <p>Library Management System has a full schedule of (free!) enrichment events throughout December. Speak with a librarian or check the online…</p>
                </div>
            </div>
            <div className="two">
                <img src="https://media.istockphoto.com/id/639392022/vector/bookshelves-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1DNOwFJabnlqHzShnSHfWOsNBUTtIaOgFBcpGQO_-oQ=" height="300" width="850" alt="" />
                <div className="one_text">
                <h1 style={{color:'darkblue'}}>Friends Friday Films Announces Its Winter Screenings.....</h1> <hr color="skyblue" width="500px" />
                <p>This Library’s longest-running program—the Friends Friday Films series—is back with a full slate of movies, beginning on January 6.....</p>
                </div>
            </div>
            <div className="three">
            <img src="https://media.istockphoto.com/id/639392022/vector/bookshelves-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=1DNOwFJabnlqHzShnSHfWOsNBUTtIaOgFBcpGQO_-oQ=" height="300" width="850" alt="" />
                <div className="one_text">
                <h1 style={{color:'darkblue'}}>Signature Series: "The Palace Papers" Author Tina Brown.....</h1> <hr color="skyblue" width="500px" />
                <p>Greenwich Library’s Signature Series will welcome journalist, author, and former New Yorker and Vanity Fair editor in chief Tina Brown.....</p>
                </div>

            </div>

        </div>
     
     );
}
 
export default AdminDashboard;