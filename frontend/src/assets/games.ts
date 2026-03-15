import EldenRingCoverImage from "./game-covers/elden-ring-cover.jpg"
import LifeIsStrangeCoverImage from "./game-covers/life-is-stange-cover.png"
import TerrariaCoverImage from "./game-covers/terraria-cover.jpg"

export const favoriteGames = [
    {
        id: 1, 
        gameTitle: "Elden Ring",
        playtime: "120h",
        platforms: new Array<string>("Steam"),
        cover: EldenRingCoverImage
    }, 
    {
        id: 2,
        gameTitle: "Life is Strange",
        playtime: "45h",
        platforms: new Array<string>("Steam"),
        cover: LifeIsStrangeCoverImage
    }, 
    {
        id: 3,
        gameTitle: "Terraria",
        playtime: "80h",
        platforms: new Array<string>("Steam"),
        cover: TerrariaCoverImage
    }
] as const;