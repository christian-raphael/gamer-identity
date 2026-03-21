import { platformLogos } from "../../../assets/images";
import "./LastGamePlayedCard.css"
import type { Game } from "../types";
import EmojiEvents from "@mui/icons-material/EmojiEvents";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface LastGamePlayedCardProps {
    game: Game
}

function LastGamePlayedCard({ game }: LastGamePlayedCardProps) {
    return (
        <div className="last-game-played-card card-container">
            <h2>Last Game Played</h2>
            <div className="last-game-played-banner-container">
                <img src={game.cover} alt={game.gameTitle} />
            </div>
            <div className="last-game-played-details-container">
                <div className="last-game-played-detail">
                    <h3 className="last-game-played-detail-label">
                        Played <br/> Time
                    </h3>
                    <p className="last-game-played-detail-data">
                        <AccessTimeIcon fontSize="small"/>
                        {game.playtime} Hours
                    </p>
                </div>
                <div className="last-game-played-detail">
                    <h3 className="last-game-played-detail-label">Achievements</h3>
                    <progress className="achievements-progress-bar" 
                        value={game.unlockedAchievements} 
                        max={game.totalAchievements} 
                    />
                    <p className="last-game-played-detail-data">
                        <EmojiEvents fontSize="small"/>
                        {game.unlockedAchievements}/{game.totalAchievements}
                    </p>
                </div>
                <div className="last-game-played-detail">
                    <h3 className="last-game-played-detail-label">
                        Played <br/> In
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