import UserCollectionItem from "../UserCollectionItem/UserCollectionItem";
import "./UserCollectionsCard.css";

function UserCollectionsCard() {
  return (
    <div className="user-collections-card card-container">
      <h2>Your Collections</h2>
      <div className="main-collections-area">
        {/* create different styles for 2 and 3 items in the collection (gap for 2 items, 
            and space-between for 3 items) */}
        <UserCollectionItem />
        <UserCollectionItem />
        <UserCollectionItem />
      </div>
    </div>
  );
}

export default UserCollectionsCard;