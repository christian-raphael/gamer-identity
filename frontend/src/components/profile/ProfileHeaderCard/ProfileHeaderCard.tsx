import profilePicture from "../../../assets/sample-profile-picture.png"
import { platformLogos } from "../../../assets/images"
import "./ProfileHeaderCard.css"

function ProfileHeaderCard() {
    return (
        <section className="header">
            <div className="profile-picture-container">
                <img src={profilePicture} />
            </div>
            <div className="user-info-container">
                <h1>Chrz</h1>

                <span>3 seguidores - 1 seguindo</span>
                
                <ul className="connected-platforms-list">
                    <li>
                        <img src={platformLogos.steam} />
                    </li>
                    <li>
                         <img src={platformLogos.playstation} />
                    </li>
                    <li>
                         <img src={platformLogos.xbox} />
                    </li>
                    <li>
                         <img src={platformLogos.nintendo} />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default ProfileHeaderCard