import Image from 'next/image'
import Link from 'next/link'

type ExperienceCardProps = {
    imgUrl: string
    description: string
    link: string
    id: number
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ id, imgUrl, description, link }) => {
    return (
        <div key={id} className="rounded-3xl overflow-hidden">
            <Link href={link}>
                <Image src={imgUrl} alt={description} width={320} height={180} />
            </Link>
        </div>
    )
}

export const Experiences = async () => {
    const mainExperiences = [
        {
            id: 1,
            link: '',
            description: 'Fortnite Lego',
            imgUrl: '/experiences/fortnite-lego.webp',
        },
        {
            id: 2,
            link: '',
            description: 'Fortnite Festival',
            imgUrl: '/experiences/fortnite-festival.webp',
        },
        {
            id: 3,
            link: '',
            description: 'Rocket Racing',
            imgUrl: '/experiences/rocket-racing.webp',
        },
    ]

    const extraExperiences = [
        {
            title: 'Fortnite',
            imgUrl: '/experiences/fortnite-background.webp',
            logoUrl: '/experiences/fortnite-logo.webp',
            description:
                'Join "The Underground in Chapter 5 Season 1 and battle bosses, craft weapons, and make allies to reclaim the Island.',
            price: 0,
            buttonText: 'Play Free Now',
        },
        {
            title: 'Fortnite',
            imgUrl: '/experiences/fortnite-background.webp',
            logoUrl: '/experiences/fortnite-logo.webp',
            description:
                'Join "The Underground in Chapter 5 Season 1 and battle bosses, craft weapons, and make allies to reclaim the Island.',
            price: 0,
            buttonText: 'Play Free Now',
        },
    ]

    return (
        <div className="flex gap-4 flex-col">
            <h2 className="text-lg">Fortnite Experiences</h2>
            <div className="flex gap-6 justify-around">
                {mainExperiences.map((experience) => (
                    <ExperienceCard key={experience.id} {...experience} />
                ))}
            </div>
        </div>
    )
}
