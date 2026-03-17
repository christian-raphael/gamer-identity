import "./FavoriteGameItem.css"
import { platformLogos } from "../../../assets/images";
import type { JSX } from "react";

interface FavoriteGameItemProps {
    game: {
        id: number;
        gameTitle: string;
        playtime: string;
        platforms: string[];
        cover: string;
        totalAchievements: string;
        unlockedAchievements: string;
    }
}

function buildAchievementsString(gameData: FavoriteGameItemProps): string {
    const totalGameAchievements:string = gameData.game.totalAchievements;
    const unlockedGameAchievements:string = gameData.game.unlockedAchievements;

    if (unlockedGameAchievements === totalGameAchievements) {
        return "100% Completed";
    }

    return `${unlockedGameAchievements}/${totalGameAchievements}`;
}

function buildPlatformsLogosElements(platforms: string[]): JSX.Element[] {
    return platforms.map((platform: string) => { 
        const platformKey = platform.toLowerCase();
        return <img key={platform} src={platformLogos[platformKey]} alt={`${platform} Logo`} className="platform-icon"/>
    })
}

function FavoriteGameItem({ game }: FavoriteGameItemProps) {
    return (
        <div className="favorite-game-item">
            <img src={game.cover} alt={game.gameTitle} className="game-cover" />
            <div className="game-info">
                <div className="platforms-container">
                    {buildPlatformsLogosElements(game.platforms)}
                </div>
                <div>
                    <span>{buildAchievementsString({ game })}</span>
                </div>
                <span>Playtime: {game.playtime}</span>
            </div>
        </div>
    );
}

export default FavoriteGameItem;