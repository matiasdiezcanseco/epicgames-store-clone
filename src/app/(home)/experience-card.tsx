import Image from 'next/image'
import Link from 'next/link'

type ExperienceCardProps = {
    imgUrl: string
    description: string
    link: string
    id: number
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
    id,
    imgUrl,
    description,
    link,
}) => {
    return (
        <div key={id} className="rounded-2xl overflow-hidden">
            <Link href={link}>
                <Image
                    src={imgUrl}
                    alt={description}
                    height={854 / 1.78}
                    width={854}
                    style={{ objectFit: 'contain' }}
                />
            </Link>
        </div>
    )
}
