import "./FavoriteGameItem.css"

interface FavoriteGameItemProps {
    game: {
        id: number;
        gameTitle: string;
        playtime: string;
        platforms: string[];
        cover: string;
    }
}

function FavoriteGameItem({ game }: FavoriteGameItemProps) {
    return (
        <div className="favorite-game-item">
            <img src={game.cover} alt={game.gameTitle} className="game-cover" />
            <div className="game-info">
                {/* <div>
                    <span>Completed</span>
                </div>
                <h3>{game.gameTitle}</h3>
                <span>Playtime: {game.playtime}</span>
                <div className="platforms-container">
                    <img src={SteamLogo} alt="Steam Logo" className="platform-icon"/>
                </div>
                <button className="game-details-button">View Details</button> */}
            </div>
        </div>
    );
}

export default FavoriteGameItem;