import nintendo from "./platform-logos/nintendo.png"
import playstation from "./platform-logos/playstation.jpeg"
import steam from "./platform-logos/steam.jpeg"
import xbox from "./platform-logos/xbox.jpeg"

export const platformLogos:Record<string, string> = {
    nintendo: nintendo,
    playstation: playstation,
    steam: steam,
    xbox: xbox
} as const;