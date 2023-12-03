import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className="bg-background-secondary">
            <div>
                <button>
                    <Image src="/epic-logo.png" alt="Epic Games Logo" width={32} height={32} />
                    <ChevronDown color="red" size={20} />
                </button>
                <div></div>
                <a href="">STORE</a>
                <ul>
                    <li>
                        <Link href="">Distribution</Link>
                    </li>
                    <li>
                        <Link href="">Support</Link>
                    </li>
                    <li>
                        <Link href="">Unreal Engine</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Button>Download</Button>
            </div>
        </header>
    )
}
