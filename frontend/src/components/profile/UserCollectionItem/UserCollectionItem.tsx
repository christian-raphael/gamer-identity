import { collectionGames } from "../../../assets/games.ts";

function buildGameCoversElements() {
  const gameCoversElements = [];

  for (let i = 0; i < 4; i++) {
    const game = collectionGames[i];
    gameCoversElements.push(<img key={game.id} src={game.gameCover} alt={game.gameTitle} />);
  }

  return gameCoversElements;
}

function getRemainingGameCount(collectionSize: number) {
  const remainingGames = collectionSize - 4;
  return remainingGames > 0 ? `+${remainingGames}` : '';
}

function UserCollectionItem() {
  const gameCoversElements = buildGameCoversElements();
  const remainingGameCount = getRemainingGameCount(collectionGames.length);

  return (
    <div>
        <div className="collection-item">
            <div className="game-covers">
              {gameCoversElements}
              <span className="game-count">{remainingGameCount}</span>
            </div>
            <h3>Backloged Games</h3>
        </div>
    </div>
  );
}

export default UserCollectionItem;