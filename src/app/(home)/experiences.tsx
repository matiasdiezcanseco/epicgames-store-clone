import { getCarouselExperiences, getExperiences } from '@/server/actions/experiences'

import { Carousel } from './carousel'
import { ExperienceCard } from './experience-card'

export const Experiences = async () => {
    const mainExperiences = await getExperiences()
    const carouselExperiences = await getCarouselExperiences()

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h2 className="text-lg">Fortnite Experiences</h2>
                <div className="grid grid-cols-3 items-center gap-6">
                    {mainExperiences.map((experience) => (
                        <ExperienceCard key={experience.id} {...experience} />
                    ))}
                </div>
            </div>
            <Carousel experiences={carouselExperiences} />
        </div>
    )
}
