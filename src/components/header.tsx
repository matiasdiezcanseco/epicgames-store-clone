import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import Divider from './ui/divider'

export const Header = () => {
    return (
        <header className=" h-[72px] bg-background-secondary flex items-center justify-between py-2 px-6">
            <div className="flex items-center gap-6">
                <button className="flex items-center gap-2">
                    <Image src="/epic-logo.png" alt="Epic Games Logo" width={32} height={32} />
                    <ChevronDown style={{ color: 'var(--secondary-font)' }} size={20} />
                </button>
                <Divider orientation="vertical" size={26} />
                <Link href="" className="font-semibold text-xl">
                    STORE
                </Link>
                <ul className="flex gap-8">
                    <li>
                        <Link href="" className="text-text-secondary text-sm">
                            Distribution
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="text-text-secondary text-sm">
                            Support
                        </Link>
                    </li>
                    <li>
                        <Link href="" className="text-text-secondary text-sm">
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
