'use server'

import discounts from '@/server/db/featured-discounts.json'

export const getFeaturedDiscounts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return discounts
}