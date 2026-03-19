import { platformLogos } from "../../../assets/images";
import lastPlayedGameSampleBanner from "../../../assets/game-covers/resident-evil-cover.jpg"
import "./LastGamePlayedCard.css"

function LastGamePlayedCard() {
    return (
        <div className="last-game-played-card card-container">
            <h2>Last Game Played</h2>
            <div className="last-game-played-banner-container">
                <img src={lastPlayedGameSampleBanner} alt="Resident Evil: Requiem" />
            </div>
            <div className="last-game-played-details-container">
                <div className="last-game-played-detail">
                    <h3 className="last-game-played-detail-label">
                        Play Time
                    </h3>
                    <p className="last-game-played-detail-data">7.5 Hours</p>
                </div>
                <div className="last-game-played-detail">
                    <h3 className="last-game-played-detail-label">Achievements</h3>
                    <progress className="achievements-progress-bar" value={8} max={20} />
                    <p className="last-game-played-detail-data">8/20</p>
                </div>
                <div className="last-game-played-detail">
                    <h3 className="last-game-played-detail-label">
                        Played in
                    </h3>
                    <div className="last-game-played-platform-container">
                        <img src={platformLogos.steam} alt="Steam" className="played-platform-icon" />
                        <p className="last-game-played-detail-data">Steam</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastGamePlayedCard;