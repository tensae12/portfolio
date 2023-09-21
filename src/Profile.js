import "./Profile.css";
import {AiFillLinkedin, AiFillGithub, } from "react-icons/ai";
import image from "./headshot.png";
const Profile = () => {
    return (
        <div className="section">
            <div className="bio">
                <p className="no-margin small-text">HELLO :)</p>
                <p className="no-margin name-text">
                   I'M <span className="highlights-text">TENSAE KEBEDE</span></p>
                <p className="no-margin small-text"> 
                   HARDWARE <span className="highlight-text">and</span> SOFTWARE ENGINEER</p>
               
                <div className="icons">
                    <a href="https://www.linkedin.com/in/tensae-kebede/">
                        <AiFillLinkedin color = "blue" size={30}/>
                    </a>
                    <a href="https://github.com/tensae12/">
                        <AiFillGithub color = "black" size={30}/>
                    </a>
                </div>
            </div>
            <div className="photo">
                <img src={image} className="profile-image" alt= "me"/>
                <p className="no-margin small-text2"> <img src="https://www.uniadvisor.co/wp-content/uploads/2019/07/uc-berkeley-logo-seal.jpg" className="school-logo" alt="My Logo"/>    University of California Berkeley  </p>
            
                <p className="no-margin small-text2">Electrical Engineering and computer science </p>
            </div>
        </div>

    );
};
export default Profile;
