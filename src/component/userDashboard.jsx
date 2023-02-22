import "../styles/userDashboard.css"

const UserDashboard = () => {
    return (
        <div className="userDashboard">
            <h1>WELCOME TO USER DASHBOARD</h1>
            <div className="oneUser">
                <img src="https://tse4.mm.bing.net/th?id=OIP.-7hjVP3F2e4Jf7PPOv3LZAHaEI&pid=Api&P=0" height="300" width="850" alt="" />
                <div className="onetext">
                    <h1 style={{ color: 'darkblue' }}>LinkedIn Learning</h1> <hr color="skyblue" width="500px" />
                    <p>LinkedIn Learning (formerly Lynda) is an online educational site that features thousands of courses and video tutorials where you can discover, complete, and track courses related to your industry or interests.</p>
                </div>
                <div className="twoUser">
                    <div className="twotext">
                        <h1>Learn Something New or Get Tech Help</h1>
                        <h5>Register on the online calendar. For more information call (203) 622-7920.</h5>
                    </div>
                </div>
                <div className="oneUser">
                    <img src="https://media.istockphoto.com/id/1296200870/vector/library-book-shelf-interior-graphic-sketch-black-white-illustration-vector.jpg?s=612x612&w=0&k=20&c=FYi5bdlW9bBIRcbX8KTUX9TOxID72RpfymKp0Lx_IFc=" height="300" width="850" alt="" />
                    <div className="onetext">
                        <h1 style={{ color: 'darkblue' }}>Questions About the Digital Library?</h1> <hr color="skyblue" width="500px" />
                        <p>Our Digital Library quick guides or video tutorials will help you access eBooks, audiobooks, videos, music, and magazines from any device.</p>
                    </div>
                </div>
                <div className="twoUser">
                    <div className="twotext">
                        <h1>Tech Training eNewsletter</h1>
                        <h5>Stay up-to-date on the latest Technology programs and events by subscribing to the Library’s Tech Training eNewsletter.....</h5>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default UserDashboard;





