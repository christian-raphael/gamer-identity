import FavoriteGameItem from "../FavoriteGameItem/FavoriteGameItem";
import "./ProfileFavoriteGamesCard.css";
import { favoriteGames } from "../../../assets/games.ts";

const favoriteGamesElements = favoriteGames.map(game => <FavoriteGameItem key={game.id} game={game} />);

function ProfileFavoriteGamesCard() {
    return (
        <div className="profile-favorite-games-card card-container">
            <h2>Favorite Games</h2>
            <div className="favorite-games-container">
                {favoriteGamesElements}
            </div>
        </div>
    )
}

export default ProfileFavoriteGamesCard;