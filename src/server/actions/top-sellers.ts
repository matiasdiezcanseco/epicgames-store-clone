'use server'

import topSellers from '@/server/db/top-sellers.json'

export const getTopSellers = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return topSellers
}
