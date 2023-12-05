'use server'

import carouselExperiences from '@/server/db/carousel-experiences.json'
import experiences from '@/server/db/experiences.json'

export const getExperiences = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return experiences
}

export const getCarouselExperiences = async () => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return carouselExperiences
}
