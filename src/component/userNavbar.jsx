import { Link } from "react-router-dom";

const UserNavbar = () => {
    return ( 
        <div className="adminNavbar">
        <div className="nav_head">
            <div className="nav_logo">
                {/* <h1>User portal</h1> */}
                <img height='50px' src="/images/admin_logo.jfif" alt="" />
            </div>

            <div className="nav_links">
                <ul>
                    <li><Link to='/user/'>Dashboard</Link></li>
                    <li><Link to='/user/book-list'>Book List</Link></li>
                    <li><Link to='/'>Logout</Link></li>

                </ul>
            </div>
        </div>
    </div>

     );
}
 
export default UserNavbar;