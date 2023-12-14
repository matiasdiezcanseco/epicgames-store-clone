'use server'

import mostPlayed from '@/server/db/most-played.json'

export const getMostPlayed = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return mostPlayed
}
