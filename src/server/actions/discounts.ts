'use server'

import discounts from '@/server/db/featured-discounts.json'
import deals from '@/server/db/deals-week.json'

export const getFeaturedDiscounts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return discounts
}

export const getDealsOfTheWeek = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return deals
}