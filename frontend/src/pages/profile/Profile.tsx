import ProfileHeaderCard  from "../../components/profile/ProfileHeaderCard/ProfileHeaderCard"
import UserStatisticsCard from "../../components/profile/UserStatisticsCard/UserStatisticsCard"
import FavoriteGamesCard from "../../components/profile/FavoriteGamesCard/FavoriteGamesCard"
import LastGamePlayedCard from "../../components/profile/LastGamePlayedCard/LastGamePlayedCard"
import "./Profile.css"
import { favoriteGames } from "../../assets/games.ts";

function Profile() {
    return (
        <section className="profile-page">
            <ProfileHeaderCard/>
            <UserStatisticsCard/>
            <FavoriteGamesCard/>
            <LastGamePlayedCard game={favoriteGames[3]} />
        </section>
    )
}

export default Profile
