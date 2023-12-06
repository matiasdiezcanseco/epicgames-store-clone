'use server'

import displayGames from '@/server/db/display-games.json'

export const getDisplayGames = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return displayGames
}
