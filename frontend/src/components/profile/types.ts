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

export interface ConnectedPlatform {
    platform: Platform;
    username?: string;
    connected: boolean;
}

export interface ProfileStats {
    games: number;
    finishedGames: number;
    completedGames: number;
    hoursPlayed: number;
    mostPlayedPlatform: Platform;
}

export interface UserProfile {
    id: string;
    accountName: string;
    accountAvatarUrl: string;
    followersCount: number;
    followingCount: number;
    connectedPlatforms: ConnectedPlatform[];
    stats: {
        allTime: ProfileStats;
        currentYear: ProfileStats;
    };
    favoriteGames: Game[]
    lastPlayedGame?: Game;
    collections: UserCollection[]
}