import Link from 'next/link'

import SearchInput from './search-input'

export const SearchBar = () => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-6  items-center">
                <SearchInput />
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
