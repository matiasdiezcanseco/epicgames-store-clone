import Image from 'next/image'
import Link from 'next/link'

interface TripleDisplayProps {
    title?: string
    products: {
        subtitle: string
        title: string
        discountPercentage: number
        price: number
        discountPrice: number
        imageUrl: string
    }[]
    onlyImages?: boolean
}

export const TripleDisplay: React.FC<TripleDisplayProps> = async ({
    title = '',
    onlyImages = false,
    products,
}) => {
    return (
        <>
            {title && <h3>{title}</h3>}
            <div className="grid grid-cols-3 gap-6 pt-8">
                {products.map((deal) => (
                    <div key={deal.title} className="flex flex-col gap-6">
                        <Image
                            className="overflow-hidden rounded-2xl"
                            src={deal.imageUrl}
                            alt={deal.title}
                            height={854 / 1.78}
                            width={854}
                            style={{ objectFit: 'contain' }}
                        />
                        <p className="text-xl">{deal.title}</p>
                        <div className="flex items-center gap-2">
                            <p className="rounded-md bg-accent px-2 py-1 text-xs">
                                {deal.discountPercentage}%
                            </p>
                            <p className="text-lg text-text-secondary line-through">
                                USD {deal.price}
                            </p>
                            <p className="text-lg">USD {deal.discountPrice}</p>
                        </div>
                    </div>
                ))}
                <div className="flex flex-col gap-6">
                    <Image
                        className="overflow-hidden rounded-2xl"
                        src="/deals-week/sales-special.avif"
                        alt="Deal's Special"
                        height={854 / 1.78}
                        width={854}
                        style={{ objectFit: 'contain' }}
                    />
                    <p className="text-xl">Check out all the deals for this week.</p>
                    <Link
                        href="/"
                        className="text-xl underline decoration-background-primary-highlight underline-offset-8"
                    >
                        Browse
                    </Link>
                </div>
            </div>
        </>
    )
}
