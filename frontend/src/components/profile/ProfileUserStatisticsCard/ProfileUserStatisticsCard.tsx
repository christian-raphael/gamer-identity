import './ProfileUserStatisticsCard.css';

function ProfileUserStatisticsCard() {
  return (
    <div className="profile-user-statistics-card">
        <div className="statistics-container">
            <div className="toggle-buttons-container">
                <span className="active">All Time</span>
                <span>In 2026</span>
            </div>
            <div className="statistic-item">
                <span>Games</span>
                <h2>1200</h2>
            </div>
            <div className="statistic-item">
                <span>Finished Games</span>
                <h2>500</h2>
            </div>
            <div className="statistic-item">
                <span>Completed Games</span>
                <h2>300</h2>
            </div>
            <div className="statistic-item">
                <span>Hours Played</span>
                <h2>1200</h2>
            </div>
            <div className="statistic-item">
                <span>Most Played Platform</span>
                <h2>Steam</h2>
            </div>
        </div>
    </div>
  );
}

export default ProfileUserStatisticsCard;