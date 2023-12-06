import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import Divider from './ui/divider'

export const Header = () => {
    return (
        <header className=" flex h-[72px] items-center justify-between bg-background-secondary px-6 py-2">
            <div className="flex items-center gap-6">
                <button className="flex items-center gap-2">
                    <Image src="/epic-logo.png" alt="Epic Games Logo" width={32} height={32} />
                    <ChevronDown style={{ color: 'var(--secondary-font)' }} size={20} />
                </button>
                <Divider orientation="vertical" size={26} />
                <Link href="" className="text-xl font-semibold">
                    <Image src="/store-text.svg" width={54} height={32} alt="Store" />
                </Link>
                <ul className="flex">
                    <li>
                        <Link
                            href=""
                            className="duration rounded-md px-4 py-2 text-sm text-text-secondary transition hover:bg-background-tertiary-highlight hover:text-text-primary"
                        >
                            Distribution
                        </Link>
                    </li>
                    <li>
                        <Link
                            href=""
                            className="duration rounded-md px-4 py-2 text-sm text-text-secondary transition hover:bg-background-tertiary-highlight hover:text-text-primary"
                        >
                            Support
                        </Link>
                    </li>
                    <li>
                        <Link
                            href=""
                            className="duration rounded-md px-4 py-2 text-sm text-text-secondary transition hover:bg-background-tertiary-highlight hover:text-text-primary"
                        >
                            Unreal Engine
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Button>Download</Button>
            </div>
        </header>
    )
}
