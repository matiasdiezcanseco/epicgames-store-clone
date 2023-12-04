import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ExtraExperiences } from './extra-experiences'

type ExperienceCardProps = {
    imgUrl: string
    description: string
    link: string
    id: number
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ id, imgUrl, description, link }) => {
    return (
        <div key={id} className="rounded-3xl overflow-hidden">
            <Link href={link} >
                <Image src={imgUrl} alt={description}  height={854/1.78} width={854} style={{objectFit: 'contain'}} />
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
            thumbUrl: '/experiences/fortnite-thumb.webp',
            description:
                'Join "The Underground in Chapter 5 Season 1 and battle bosses, craft weapons, and make allies to reclaim the Island.',
            price: 0,
            buttonText: 'Play Free Now',
            redirectUrl: '/',
        },
        {
            title: 'The Game Awards',
            imgUrl: '/experiences/game-awards-background.webp',
            logoUrl: '/experiences/fortnite-logo.webp',
            thumbUrl: '/experiences/game-awards-thumb.webp',
            description:
            'Follow the nominees and announcements from The Game Awards.',
            price: 0,
            buttonText: 'Learn more',
            redirectUrl: '/',
        },
        {
            title: 'Homeworld 3',
            imgUrl: '/experiences/homeworld-3-background.webp',
            logoUrl: '/experiences/fortnite-logo.webp',
            thumbUrl: '/experiences/homeworld-3-thumb.webp',
            description:
            'Tactical, beautiful, and wholly unique, the GOTY-winning sci-fi RTS returns with a new story, new enemies, and a new home.',
            price: 69.99,
            buttonText: 'Pre-Purchase Now',
            redirectUrl: '/',
        },
        {
            title: 'Avatar Frontiers of Pandora',
            imgUrl: '/experiences/avatar-background.webp',
            logoUrl: '/experiences/fortnite-logo.webp',
            thumbUrl: '/experiences/avatar-thumb.webp',
            description:
            'A first-person, action-adventure game set in the open world of the never before seen Pandora.',
            price: 69.99,
            buttonText: 'Pre-Purchase Now',
            redirectUrl: '/',
        },
        {
            title: 'Dead by Daylight - Chucky',
            imgUrl: '/experiences/dead-by-daylight-chucky-background.webp',
            logoUrl: '/experiences/fortnite-logo.webp',
            thumbUrl: '/experiences/dead-by-daylight-chucky-thumb.webp',
            description:
            "Meet Chucky, the world's most notorious doll, and his gruesome arsenal of weapons.",
            price: 5.99,
            buttonText: 'Buy Now',
            redirectUrl: '/',
        },
        {
            title: 'Destiny 2',
            imgUrl: '/experiences/destiny-2-background.webp',
            logoUrl: '/experiences/fortnite-logo.webp',
            thumbUrl: '/experiences/destiny-2-thumb.webp',
            description:
            "Make a dangerous deal to get Riven's last wish. Explore a labyrinth, uncover an Exotic mission, and earn new treasures.",
            price: 0,
            buttonText: 'Play for Free',
            redirectUrl: '/',
        },
    ]

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
            <ExtraExperiences experiences={extraExperiences} />
        </div>
    )
}
