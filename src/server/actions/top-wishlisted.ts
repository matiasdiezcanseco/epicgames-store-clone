'use server'

import topWishlisted from '@/server/db/top-wishlisted.json'

export const getTopWishlisted = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return topWishlisted
}
