import "./FavoriteGameItem.css"
import { platformLogos } from "../../../assets/images";
import type { JSX } from "react";
import { clsx } from "clsx";
import EmojiEvents from "@mui/icons-material/EmojiEvents";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import type { Game } from "../types";

interface FavoriteGameItemProps {
    game: Game;
}

function buildAchievementsString(gameData: FavoriteGameItemProps): string {
    const totalGameAchievements:number = gameData.game.totalAchievements;
    const unlockedGameAchievements:number = gameData.game.unlockedAchievements;

    if (unlockedGameAchievements === totalGameAchievements) {
        return "100%";
    }

    return `${unlockedGameAchievements}/${totalGameAchievements}`;
}

function buildPlatformsLogosElements(platforms: string[]): JSX.Element[] {
    return platforms.map((platform: string) => { 
        const platformKey = platform.toLowerCase();
        return <img 
                    key={platform} 
                    src={platformLogos[platformKey]} 
                    alt={`${platform} Logo`} 
                    className="platform-icon"
                />
    })
}

function FavoriteGameItem({ game }: FavoriteGameItemProps) {

    const achievementsString = buildAchievementsString({ game });
    const isCompleted = achievementsString.includes("100%");

    return (
        <div className="favorite-game-item">
            <img src={game.cover} alt={game.gameTitle} className="game-cover" />
            <div className="game-info">
                <div className="platforms-container">
                    {buildPlatformsLogosElements(game.platforms)}
                </div>
                <div>
                    <span className={clsx("achievements", { "completed": isCompleted })}>
                        <EmojiEvents fontSize="small"/> {achievementsString}
                    </span>
                    <span className="playtime">
                        <AccessTimeIcon fontSize="small"/> {game.playtime}h
                    </span>
                </div>
            </div>
        </div>
    );
}

export default FavoriteGameItem;