'use client'

import { useState } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'

type SectionSwiperCard = {
    subtitle: string
    title: string
    discountPercentage: number
    price: number
    discountPrice: number
    imageUrl: string
}

export const SectionSwiperCard: React.FC<SectionSwiperCard> = ({
    subtitle,
    title,
    discountPercentage,
    price,
    discountPrice,
    imageUrl,
}) => {
    const [showAdd, setShowAdd] = useState(false)

    return (
        <div
            className="relative flex flex-col gap-2"
            onMouseEnter={() => setShowAdd(true)}
            onMouseLeave={() => setShowAdd(false)}
        >
            <div
                className="absolute right-0 top-0 z-10 p-2 transition-all ease-in-out"
                style={{ opacity: showAdd ? 100 : 0 }}
            >
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <PlusCircle size={24} />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Add to library</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <Image
                className="overflow-hidden rounded-lg hover:brightness-110"
                src={imageUrl}
                width={250}
                height={300}
                style={{ objectFit: 'contain' }}
                alt={title}
            />
            <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold text-text-secondary">
                    {subtitle.toUpperCase()}
                </p>
                <p>{title}</p>
                <div className="flex items-center gap-2">
                    <p className="rounded-md bg-sky-600 px-2 py-1 text-xs">{discountPercentage}%</p>
                    <p className="text-text-secondary line-through">USD {price}</p>
                    <p>USD {discountPrice}</p>
                </div>
            </div>
        </div>
    )
}
