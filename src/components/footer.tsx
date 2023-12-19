import { ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SiEpicgames, SiUnrealengine } from 'react-icons/si'

import { Button } from './ui/button'
import Divider from './ui/divider'

export const Footer = async () => {
    return (
        <div className="flex flex-col gap-4 bg-background-tertiary px-12 py-10">
            <div className="flex justify-between">
                <ul className="flex gap-6">
                    <li>
                        <FaFacebook
                            size={30}
                            className="text-text-secondary transition-all duration-500 hover:text-sky-500"
                        />
                    </li>
                    <li>
                        <FaTwitter
                            size={30}
                            className="text-text-secondary transition-all duration-500 hover:text-sky-500"
                        />
                    </li>
                    <li>
                        <FaYoutube
                            size={30}
                            className="text-text-secondary transition-all duration-500 hover:text-sky-500"
                        />
                    </li>
                </ul>
                <Button variant="transparent" className="p-2">
                    <ChevronUp size={20} className="text-text-secondary" />
                </Button>
            </div>
            <div className="flex">
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-semibold text-text-secondary">Resources</h4>
                    <div className="grid max-w-[700px] grid-cols-3">
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Support-A-Creator
                        </Link>
                        <Link
                            className="text- pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Fan Art Policy
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Online Services
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Distribute on Epic Games
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            UX Research
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Community Rules
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Careers
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Store EULA
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Epic Newsroom
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Company
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-semibold text-text-secondary">
                        Made By Epic Games
                    </h4>
                    <div className="grid max-w-[700px] grid-cols-3">
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Battle Breakers
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Robo Recall
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Fortnite
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Shadow Complex
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Infinity Blade
                        </Link>
                        <Link
                            className="pb-2 pr-4 text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Unreal Tournament
                        </Link>
                    </div>
                </div>
            </div>
            <Divider />
            <p className="max-w-[700px] text-xs leading-6 text-text-secondary ">
                © 2023, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games
                logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo,
                Unreal Tournament, and the Unreal Tournament logo are trademarks or registered
                trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other
                brands or product names are the trademarks of their respective owners.
            </p>
            <div className="flex justify-between">
                <ul className="flex gap-4">
                    <li>
                        <Link
                            className="text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Terms of Service
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-sm text-text-primary transition-all duration-500 hover:text-sky-500"
                            href=""
                        >
                            Store Refund Policy
                        </Link>
                    </li>
                </ul>
                <div className="flex gap-4">
                    <Link href="">
                        <SiEpicgames
                            size={35}
                            className="text-text-secondary transition-all duration-500 hover:text-text-primary"
                        />
                    </Link>
                    <Link href="">
                        <SiUnrealengine
                            size={35}
                            className="text-text-secondary transition-all duration-500 hover:text-text-primary"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}