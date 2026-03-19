import FavoriteGameItem from "../FavoriteGameItem/FavoriteGameItem.tsx";
import "./FavoriteGamesCard.css";
import { favoriteGames } from "../../../assets/games.ts";

const favoriteGamesElements = favoriteGames.map(game => <FavoriteGameItem key={game.id} game={game} />);

function FavoriteGamesCard() {
    return (
        <div className="favorite-games-card card-container">
            <h2>Favorite Games</h2>
            <div className="favorite-games-container">
                {favoriteGamesElements}
            </div>
        </div>
    )
}

export default FavoriteGamesCard;