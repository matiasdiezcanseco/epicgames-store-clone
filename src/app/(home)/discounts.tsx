import { Fragment } from 'react'
import { Button } from '@/components/ui/button'
import { getDealsOfTheWeek, getFeaturedDiscounts } from '@/server/actions/discounts'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { DiscountCard } from './discount-card'

export const Discounts = async () => {
    const discountProducts = await getFeaturedDiscounts()
    const dealsOfTheWeek = await getDealsOfTheWeek()

    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                    <h3 className="text-lg">Featured Discounts</h3>
                    <div className="flex gap-2">
                        <Button
                            variant="transparent"
                            className="h-8 w-8 rounded-full border-none bg-background-tertiary p-0 hover:bg-background-primary-highlight"
                        >
                            <ChevronLeft size={16} />
                        </Button>
                        <Button
                            variant="transparent"
                            className="h-8 w-8 rounded-full border-none bg-background-tertiary p-0 hover:bg-background-primary-highlight"
                        >
                            <ChevronRight size={16} />
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-4">
                    {discountProducts.map((product) => (
                        <Fragment key={product.title}>
                            <DiscountCard
                                subtitle={product.subtitle}
                                title={product.title}
                                discountPercentage={product.discountPercentage}
                                price={product.price}
                                discountPrice={product.discountPrice}
                                imageUrl={product.imageUrl}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8">
                {dealsOfTheWeek.map((deal) => (
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
