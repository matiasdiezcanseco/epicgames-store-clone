import { Fragment } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { SectionSwiperCard } from './section-swiper-card'

interface SectionSwiperProps {
    title: string
    products: {
        subtitle: string
        title: string
        discountPercentage: number
        price: number
        discountPrice: number
        imageUrl: string
    }[]
}

const SectionSwiper: React.FC<SectionSwiperProps> = ({ title, products }) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between">
                <h3 className="text-lg">{title}</h3>
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
                {products.map((product) => (
                    <Fragment key={product.title}>
                        <SectionSwiperCard
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
    )
}

export default SectionSwiper
