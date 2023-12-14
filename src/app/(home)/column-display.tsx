import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface ColumnData {
    title: string
    products: {
        title: string
        imgUrl: string
        price: number
        discountPrice: number
        discountPercentage: number
        released?: boolean
    }[]
    noBorder?: boolean
}

interface ColumnDisplayProps {
    firstColumn: ColumnData
    secondColumn: ColumnData
    thirdColumn: ColumnData
}

const Column = ({ title, products, noBorder }: ColumnData) => {
    return (
        <div
            className={`flex flex-col gap-4 border-r-background-primary-highlight
        ${noBorder ? '' : 'border-r pr-6'}
        `}
        >
            <div className="flex justify-between">
                <h3 className="text-2xl">{title}</h3>
                <Button variant="transparent" className="p-4 text-xs">
                    VIEW MORE
                </Button>
            </div>
            <div className="flex flex-col gap-6">
                {products.map((product) => (
                    <div className="flex items-center gap-4" key={product.title}>
                        <Image
                            className="overflow-hidden rounded-lg"
                            src={product.imgUrl}
                            width={60}
                            height={80}
                            alt={product.title}
                            style={{ objectFit: 'contain' }}
                        />
                        <div className="flex flex-col gap-2">
                            <p className="text-sm">{product.title}</p>
                            {typeof product.released === 'boolean' && !product.released && (
                                <p className="text-xs text-text-secondary">COMING SOON</p>
                            )}
                            {product.price > 0 ? (
                                <>
                                    {product.discountPercentage > 0 ? (
                                        <div className="flex items-center gap-2">
                                            <p className="rounded-md bg-sky-600 px-2 py-1 text-xs">
                                                {product.discountPercentage}%
                                            </p>
                                            <p className="text-xs text-text-secondary line-through">
                                                USD {product.price}
                                            </p>
                                            <p className="text-xs">USD {product.discountPrice}</p>
                                        </div>
                                    ) : (
                                        <p className="text-xs">USD {product.price}</p>
                                    )}
                                </>
                            ) : (
                                <p className="text-xs">Free</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const ColumnDisplay: React.FC<ColumnDisplayProps> = ({
    firstColumn,
    secondColumn,
    thirdColumn,
}) => {
    return (
        <div className="grid grid-cols-3 gap-6">
            <Column {...firstColumn} />
            <Column {...secondColumn} />
            <Column {...thirdColumn} noBorder />
        </div>
    )
}

export default ColumnDisplay
