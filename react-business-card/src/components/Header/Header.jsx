import SelfieImage from "../../assets/images/selfie.jpg"
import "./header.css"
export default function Header() {

    return (
        <div className="card">
            <div className="image-wrapper">
                <img id="img-logo" src={SelfieImage}/>
            </div>
            
            <div className="info">
                <div className="bio">
                    <p id="name">De'Jour Ford</p>
                    <p id="title">Front-End Developer</p>
                    <p id="website">dejourford.netlify.app</p>
                </div>
               

                <div className="buttons">
                    <div className="left-button">
                        <i className="fa-solid fa-envelope"></i>
                        <span>E-Mail</span>
                    </div>
                    <div className="right-button">
                        <i className="fa-brands fa-linkedin"></i>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}