import Image from 'next/image'
import Link from 'next/link'

interface DoubleDisplayProps {
    products: {
        title: string
        discountPercentage: number
        price: number
        discountPrice: number
        imageUrl: string
        description: string
    }[]
}

export const DoubleDisplay: React.FC<DoubleDisplayProps> = async ({ products }) => {
    return (
        <div className="grid grid-cols-2 gap-6">
            {products.map((game) => (
                <div className="flex flex-col gap-6" key={game.title}>
                    <Image
                        className="overflow-hidden rounded-2xl"
                        src={game.imageUrl}
                        alt={game.title}
                        width={748}
                        height={441}
                        style={{ objectFit: 'contain' }}
                    />
                    <div className="flex flex-col gap-6">
                        <p className="text-xl">{game.title}</p>
                        <p className="text-text-secondary">{game.description}</p>
                        {game.discountPrice > 0 ? (
                            <div className="flex items-center gap-2">
                                <p className="rounded-md bg-sky-600 px-2 py-1 text-xs">
                                    {game.discountPercentage}%
                                </p>
                                <p className="text-lg text-text-secondary line-through">
                                    USD {game.price}
                                </p>
                                <p className="text-lg">USD {game.discountPrice}</p>
                            </div>
                        ) : (
                            <Link
                                href="/"
                                className="text-xl underline decoration-background-primary-highlight underline-offset-8"
                            >
                                Play For Free
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DoubleDisplay
