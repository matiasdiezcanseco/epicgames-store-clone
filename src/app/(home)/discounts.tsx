import { getFeaturedDiscounts } from "../../server/actions/discounts"
import {Fragment} from 'react'
import Image from "next/image"

type DiscountCardItem = {
    subtitle: string
    title: string
    discountPercentage: number
    price: number
    discountPrice: number
    imageUrl: string 
}

const DiscountCard:React.FC<DiscountCardItem> = ({
    subtitle,
    title,
    discountPercentage,
    price,
    discountPrice,
    imageUrl
}) => {
    return <div className="flex flex-col gap-2">
        <Image className="rounded-lg overflow-hidden" src={imageUrl} width={250} height={300} style={{objectFit: 'contain'}} alt={title}/>
        <div className="flex flex-col gap-1">
            <p className="text-text-secondary text-xs font-semibold">{subtitle.toUpperCase()}</p>
            <p>{title}</p>
            <div className="flex gap-2 items-center">
                <p className="bg-sky-600 rounded-md py-1 px-2 text-xs">{discountPercentage}%</p>
                <p className="line-through text-text-secondary">USD {price}</p>
                <p>USD {discountPrice}</p>
            </div>
        </div>
    
    </div>
}

export const Discounts = async () => {

    const discountProducts = await getFeaturedDiscounts()

  return (
    <div className="flex flex-col gap-6">
        <h3>Featured Discounts</h3>
        <div className="grid grid-cols-6 gap-4">
            {discountProducts.map((product) => (
                <Fragment 
                    key={product.title}
                >
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
    )
}
