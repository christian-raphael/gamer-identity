import profilePicture from "../../../assets/sample-profile-picture.png"
import images from "../../../assets/images"
import "./ProfileHeaderCard.css"

function ProfileHeaderCard() {
    return (
        <section className="user-card">
            <div className="profile-picture-container">
                <img src={profilePicture} />
            </div>
            <div className="user-info-container">
                <span>Hello,</span>
                <h1>Chrz</h1>
                
                {/* <ul>
                    <li>
                        <img src={images.steam} />
                    </li>
                    <li>
                         <img src={images.playstation} />
                    </li>
                    <li>
                         <img src={images.xbox} />
                    </li>
                    <li>
                         <img src={images.nintendo} />
                    </li>
                </ul> */}
            </div>
        </section>
    )
}

export default ProfileHeaderCard