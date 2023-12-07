'use server'

import deals from '@/server/db/deals-week.json'
import discounts from '@/server/db/featured-discounts.json'

export const getFeaturedDiscounts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return discounts.slice(0, 6)
}

export const getDealsOfTheWeek = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return deals
}
