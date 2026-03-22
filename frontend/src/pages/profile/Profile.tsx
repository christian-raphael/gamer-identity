import ProfileHeaderCard  from "../../components/profile/ProfileHeaderCard/ProfileHeaderCard"
import UserStatisticsCard from "../../components/profile/UserStatisticsCard/UserStatisticsCard"
import FavoriteGamesCard from "../../components/profile/FavoriteGamesCard/FavoriteGamesCard"
import UserCollectionsCard from "../../components/profile/UserCollectionsCard/UserCollectionsCard"
import LastGamePlayedCard from "../../components/profile/LastGamePlayedCard/LastGamePlayedCard"
import "./Profile.css"
import { favoriteGames } from "../../assets/games.ts";

function Profile() {
    return (
        <section className="profile-page">
            <ProfileHeaderCard/>
            <UserStatisticsCard/>
            <FavoriteGamesCard/>
            <div className="bottom-cards-container">
                <UserCollectionsCard/>
                <LastGamePlayedCard game={favoriteGames[3]} />
            </div>
        </section>
    )
}

export default Profile
