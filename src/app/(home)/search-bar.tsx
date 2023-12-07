'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import SearchInput from './search-input'

export const SearchBar = () => {
    const pathname = usePathname()

    return (
        <div className="flex justify-between pt-4">
            <div className="flex items-center gap-6">
                <SearchInput />
                <ul className="flex gap-6">
                    <li>
                        <Link
                            href=""
                            className="text-text-secondary transition hover:text-white"
                            style={{ color: pathname === '/' ? 'white' : '' }}
                        >
                            Discover
                        </Link>
                    </li>
                    <li>
                        <Link
                            href=""
                            className="text-text-secondary transition hover:text-white"
                            style={{ color: pathname === '/browse' ? 'white' : '' }}
                        >
                            Browse
                        </Link>
                    </li>
                    <li>
                        <Link
                            href=""
                            className="text-text-secondary transition hover:text-white"
                            style={{ color: pathname === '/news' ? 'white' : '' }}
                        >
                            News
                        </Link>
                    </li>
                </ul>
            </div>
            <ul className="flex items-center gap-6">
                <li>
                    <Link href="" className="text-text-secondary transition hover:text-white">
                        Wishlist
                    </Link>
                </li>
                <li>
                    <Link href="" className="text-text-secondary transition hover:text-white">
                        Cart
                    </Link>
                </li>
            </ul>
        </div>
    )
}
