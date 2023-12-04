import { Input } from '@/components/ui/input'
import Link from 'next/link'

export const SearchBar = () => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-6  items-center">
                <Input placeholder="Search store" />
                <ul className="flex gap-6">
                    <li>
                        <Link href="" className="text-text-secondary text-sm">
                            Discover
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="text-text-secondary text-sm">
                            Browse
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="text-text-secondary text-sm">
                            News
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className="flex gap-6 items-center">
                <li>
                    <Link href="" className="text-text-secondary text-sm">
                        Wishlist
                    </Link>
                </li>
                <li>
                    <Link href="" className="text-text-secondary text-sm">
                        Cart
                    </Link>
                </li>
            </ul>
        </div>
    )
}
