import { idID } from "@mui/material/locale";
import type { Platform } from "../components/profile/types";
import EldenRingCoverImage from "./game-covers/elden-ring-cover.jpg"
import LifeIsStrangeCoverImage from "./game-covers/life-is-stange-cover.png"
import TerrariaCoverImage from "./game-covers/terraria-cover.jpg"
import RECoverImage from "./game-covers/resident-evil-cover.jpg"

export const favoriteGames = [
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