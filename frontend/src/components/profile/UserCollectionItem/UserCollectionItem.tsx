import "./UserCollectionItem.css";
import type { UserCollection } from "../types.ts";
import type { JSX } from "react";
import { clsx } from "clsx";

interface UserCollectionItemProps {
    collection: UserCollection;
}

function buildGameCoversElements(collection: UserCollection): JSX.Element[] {
  const gameCount = collection.games.length;
  const coversToShow = gameCount >= 4 ? 4 : 1;

  return collection.games.slice(0, coversToShow).map((game) => (
    <img key={game.id} src={game.cover} alt={game.gameTitle} />
  ));
}

function getRemainingGameCount(collectionSize: number) {
  const remainingGames = collectionSize - 4;
  return remainingGames > 0 ? `+${remainingGames}` : null;
}

function UserCollectionItem({ collection }: UserCollectionItemProps) {
  const gameCoversElements = buildGameCoversElements(collection);
  const collectionSize = collection.games.length;
  const remainingGameCount = getRemainingGameCount(collectionSize);
  const isRemainingGameCountVisible = remainingGameCount !== null;

  const collectionItemClass = clsx("collection-covers", {
    "has-at-least-four-games": collectionSize >= 4
  });

  return (
     <div className="collection-item">
        <div className={collectionItemClass}>
          {gameCoversElements}
          {isRemainingGameCountVisible && (
            <span className="game-count">{remainingGameCount}</span>
          )}
        </div>
        <h3>{collection.collectionName}</h3>
    </div>
  );
}

export default UserCollectionItem;
