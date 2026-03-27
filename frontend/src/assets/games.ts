import type { Platform, Game, UserProfile, ConnectedPlatform, UserCollection } from "../components/profile/types";
import EldenRingCoverImage from "./game-covers/elden-ring-cover.jpg"
import LifeIsStrangeCoverImage from "./game-covers/life-is-stange-cover.png"
import TerrariaCoverImage from "./game-covers/terraria-cover.jpg"
import RECoverImage from "./game-covers/resident-evil-cover.jpg"
import SOFTColossusCoverImage from "./game-covers/softc-cover.jpg"
import LisReunionCoverImage from "./game-covers/lis-reunion-cover.jpg"
import RECodeVeronicaCoverImage from "./game-covers/re-code-veronica-cover.jpg"
import NierCoverImage from "./game-covers/nier-automata-cover.png"
import DemonSoulsCoverImage from "./game-covers/ds-remake-cover.png"
import MewgenicsCoverImage from "./game-covers/mewgenics-cover.png"

export const favoriteGames:Game[] = [
    {
        id: 1, 
        gameTitle: "Elden Ring",
        playtime: "120",
        platforms: new Array<Platform>("steam", "playstation"),
        cover: EldenRingCoverImage,
        totalAchievements: 50,
        unlockedAchievements: 50
    }, 
    {
        id: 2,
        gameTitle: "Life is Strange",
        playtime: "45",
        platforms: new Array<Platform>("steam"),
        cover: LifeIsStrangeCoverImage,
        totalAchievements: 29,
        unlockedAchievements: 27
    }, 
    {
        id: 3,
        gameTitle: "Terraria",
        playtime: "80",
        platforms: new Array<Platform>("steam", "xbox"),
        cover: TerrariaCoverImage,
        totalAchievements: 90,
        unlockedAchievements: 90
    },
    {
        id: 4,
        gameTitle: "Resident Evil Requiem",
        playtime: "60",
        platforms: new Array<Platform>("steam"),
        cover: RECoverImage,
        totalAchievements: 30,
        unlockedAchievements: 20
    }
] as const;

const firstCollection: Game[] = [
    {
        id: 1,
        gameTitle: "Shadow of the Colossus",
        cover: SOFTColossusCoverImage,
        playtime: "60",
        platforms: new Array<Platform>("steam"),
        totalAchievements: 30,
        unlockedAchievements: 20
    },
    {
        id: 2,
        gameTitle: "Life is Strange: Reunion",
        cover: LisReunionCoverImage,
        playtime: "60",
        platforms: new Array<Platform>("steam"),
        totalAchievements: 30,
        unlockedAchievements: 20
    },
    {
        id: 3,
        gameTitle: "Resident Evil: Code Veronica",
        cover: RECodeVeronicaCoverImage,
        playtime: "60",
        platforms: new Array<Platform>("steam"),
        totalAchievements: 30,
        unlockedAchievements: 20
    },
    {
        id: 4,
        gameTitle: "Nier: Automata",
        cover: NierCoverImage,
        playtime: "60",
        platforms: new Array<Platform>("steam"),
        totalAchievements: 30,
        unlockedAchievements: 20
    },
    {
        id: 5,
        gameTitle: "Demon Souls: Remake",
        cover: DemonSoulsCoverImage,
        playtime: "60",
        platforms: new Array<Platform>("steam"),
        totalAchievements: 30,
        unlockedAchievements: 20
    }, 
    {
        id: 6,
        gameTitle: "Mewgenics",
        cover: MewgenicsCoverImage,
        playtime: "60",
        platforms: new Array<Platform>("steam"),
        totalAchievements: 30,
        unlockedAchievements: 20
    }
] as const;

const secondCollection: Game[] = [
    {
        id: 5,
        gameTitle: "Demon Souls: Remake",
        cover: DemonSoulsCoverImage,
        playtime: "60",
        platforms: ["steam"],
        totalAchievements: 30,
        unlockedAchievements: 20
    },
    {
        id: 2,
        gameTitle: "Resident Evil Requiem",
        playtime: "60",
        platforms: ["steam"],
        cover: RECoverImage,
        totalAchievements: 30,
        unlockedAchievements: 20
    }
] as const;

export const userCollections:UserCollection[] = [
    {
        id: 1,
        collectionName: "Backlogged Games",
        games: firstCollection
    },
    {
        id: 2,
        collectionName: "To 100%",
        games: secondCollection
    }
] as const;

const userPlatforms:ConnectedPlatform[] = [
    {
        platform: "steam",
        connected: true
    },
    {
        platform: "nintendo",
        connected: false
    },
    {
        platform: "playstation",
        connected: true
    },
    {
        platform: "xbox",
        connected: true
    }
]

export const user:UserProfile = {
    id: "1",
    accountName: "chrz",
    accountAvatarUrl: "../../../assets/sample-profile-picture.png",
    followersCount: 0,
    followingCount: 0,
    connectedPlatforms:  userPlatforms,
    stats: {
         allTime: {
            games: 0,
            finishedGames: 0,
            completedGames: 0,
            hoursPlayed: 0,
            mostPlayedPlatform: "steam"
        },
        currentYear: {
            games: 0,
            finishedGames: 0,
            completedGames: 0,
            hoursPlayed: 0,
            mostPlayedPlatform: "steam"
        }
    }, 
    favoriteGames: favoriteGames,
    lastPlayedGame: favoriteGames[3],
    collections: userCollections
} as const;