import UserCollectionItem from "../UserCollectionItem/UserCollectionItem";

function UserCollectionsCard() {
  return (
    <div className="user-collections-card card-container">
      <h2>Your Collections</h2>
      <UserCollectionItem />
    </div>
  );
}

export default UserCollectionsCard;