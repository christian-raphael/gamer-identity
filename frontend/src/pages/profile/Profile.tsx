import ProfileHeaderCard  from "../../components/profile/ProfileHeaderCard/ProfileHeaderCard"
import ProfileUserStatisticsCard from "../../components/profile/ProfileUserStatisticsCard/ProfileUserStatisticsCard"
import ProfileFavoriteGamesCard from "../../components/profile/ProfileFavoriteGamesCard/ProfileFavoriteGamesCard"
import "./Profile.css"

function Profile() {
    return (
        <section>
            <ProfileHeaderCard/>
            <ProfileUserStatisticsCard/>
            <ProfileFavoriteGamesCard/>
        </section>
    )
}

export default Profile