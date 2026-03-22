import UserCollectionItem from "../UserCollectionItem/UserCollectionItem";
import "./UserCollectionsCard.css";
import clsx from "clsx";
import { userCollections } from "../../../assets/games";

function buildCollectionsItemsElements() {
    return userCollections.slice(0, 3).map((collection) => (
        <UserCollectionItem key={collection.id} collection={collection}/>
    ));
}

function UserCollectionsCard() {
  const collectionsItemsElements = buildCollectionsItemsElements();
  const isTwoCollections = userCollections.length === 2;

  const mainCollectionsAreaClassName = clsx("main-collections-area", {
    "two-collections": isTwoCollections,
    "three-collections": !isTwoCollections
  });

  return (
    <div className="user-collections-card card-container">
      <h2>Your Collections</h2>
      <div className={mainCollectionsAreaClassName}>
        {collectionsItemsElements}
      </div>
    </div>
  );
}

export default UserCollectionsCard;