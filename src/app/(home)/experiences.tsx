import { getCarouselExperiences, getExperiences } from '@/server/actions/experiences'

import { Carousel } from './carousel'
import { ExperienceCard } from './experience-card'

export const Experiences = async () => {
    const mainExperiences = await getExperiences()
    const carouselExperiences = await getCarouselExperiences()

    return (
        <div className="flex gap-8 flex-col">
            <div className="flex gap-4 flex-col">
                <h2 className="text-lg">Fortnite Experiences</h2>
                <div className="grid gap-6 grid-cols-3 items-center">
                    {mainExperiences.map((experience) => (
                        <ExperienceCard key={experience.id} {...experience} />
                    ))}
                </div>
            </div>
            <Carousel experiences={carouselExperiences} />
        </div>
    )
}
