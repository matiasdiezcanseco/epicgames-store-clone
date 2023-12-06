'use server'

import freeGames from '@/server/db/free-games.json'

export const getFreeGames = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return freeGames
}
