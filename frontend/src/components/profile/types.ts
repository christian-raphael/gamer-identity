export type Platform = "steam" | "playstation" | "xbox" | "nintendo";

export interface Game {
    id: number;
    gameTitle: string;
    playtime: string;
    platforms: Platform[];
    cover: string;
    totalAchievements: number;
    unlockedAchievements: number;
}

export interface UserCollection {
    id: number;
    collectionName: string;
    games: Game[];
}