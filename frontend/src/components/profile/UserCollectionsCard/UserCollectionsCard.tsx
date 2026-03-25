import UserCollectionItem from "../UserCollectionItem/UserCollectionItem";
import "./UserCollectionsCard.css";
import { userCollections } from "../../../assets/games";
import EditIcon from '@mui/icons-material/Edit';

function buildCollectionsItemsElements() {
    return userCollections.slice(0, 3).map((collection) => (
        <UserCollectionItem key={collection.id} collection={collection}/>
    ));
}

function UserCollectionsCard() {
  const collectionsItemsElements = buildCollectionsItemsElements();

  return (
    <div className="user-collections-card card-container">
      <h2>Your Collections</h2>
      <div className="main-collections-area">
        {collectionsItemsElements}
      </div>
      <div className="edit-collections-container">
        <button> 
          <EditIcon fontSize="small"/> 
          Edit Collections
        </button>
      </div>
    </div>
  );
}

export default UserCollectionsCard;