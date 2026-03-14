import ProfileHeaderCard  from "../../components/profile/ProfileHeaderCard/ProfileHeaderCard"
import ProfileUserStatisticsCard from "../../components/profile/ProfileUserStatisticsCard/ProfileUserStatisticsCard"
import "./Profile.css"

function Profile() {
    return (
        <section>
            <ProfileHeaderCard/>
            <ProfileUserStatisticsCard/>
        </section>
    )
}

export default Profile