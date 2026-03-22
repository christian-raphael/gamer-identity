import { idID } from "@mui/material/locale";
import type { Platform } from "../components/profile/types";
import EldenRingCoverImage from "./game-covers/elden-ring-cover.jpg"
import LifeIsStrangeCoverImage from "./game-covers/life-is-stange-cover.png"
import TerrariaCoverImage from "./game-covers/terraria-cover.jpg"
import RECoverImage from "./game-covers/resident-evil-cover.jpg"
import SOFTColossusCoverImage from "./game-covers/softc-cover.jpg"
import LisReunionCoverImage from "./game-covers/lis-reunion-cover.jpg"
import RECodeVeronicaCoverImage from "./game-covers/re-code-veronica-cover.jpg"
import NierCoverImage from "./game-covers/nier-automata-cover.png"
import DemonSoulsCoverImage from "./game-covers/ds-remake-cover.jpg"
import MewgenicsCoverImage from "./game-covers/mewgenics-cover.png"

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

export const collectionGames = [
    {
        id: 1,
        gameTitle: "Shadow of the Colossus",
        gameCover: SOFTColossusCoverImage
    },
    {
        id: 2,
        gameTitle: "Life is Strange: Reunion",
        gameCover: LisReunionCoverImage
    },
    {
        id: 3,
        gameTitle: "Resident Evil: Code Veronica",
        gameCover: RECodeVeronicaCoverImage
    },
    {
        id: 4,
        gameTitle: "Nier: Automata",
        gameCover: NierCoverImage
    },
    {
        id: 5,
        gameTitle: "Demon Souls: Remake",
        gameCover: DemonSoulsCoverImage
    }, 
    {
        id: 6,
        gameTitle: "Mewgenics",
        gameCover: MewgenicsCoverImage
    }
] as const;