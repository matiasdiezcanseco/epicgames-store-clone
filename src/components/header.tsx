'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { ChevronDown, Globe, MenuIcon, User, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import Divider from './ui/divider'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
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
                    <ul className="hidden lg:flex">
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
                <div className="hidden lg:flex">
                    <Button>Download</Button>
                </div>
                <div className="flex lg:hidden">
                    <button onClick={() => setIsMenuOpen((prev) => !prev)}>
                        <MenuIcon className="text-text-secondary" size={28} />
                    </button>
                </div>
            </header>
            {isMenuOpen && (
                <div className="fixed left-0 top-0 z-50 flex h-full w-full flex-col gap-4 bg-background-secondary p-6">
                    <div className="flex justify-between">
                        <Image src="/store-text.svg" width={54} height={32} alt="Store" />
                        <button onClick={() => setIsMenuOpen((prev) => !prev)}>
                            <X
                                className="text-text-secondary transition duration-300 hover:text-text-primary"
                                size={30}
                            />
                        </button>
                    </div>
                    <div className="ml-auto flex items-center justify-end gap-2">
                        <Link href="">
                            <Globe
                                size={24}
                                className="text-text-secondary transition duration-300 hover:text-text-primary"
                            />
                        </Link>
                        <Link href="">
                            <Avatar className="h-[30px] w-[30px]">
                                <AvatarFallback>
                                    <User
                                        size={20}
                                        className="text-text-secondary transition duration-300 hover:text-text-primary"
                                    />
                                </AvatarFallback>
                            </Avatar>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link
                            className="w-full rounded-lg bg-background-primary-highlight p-4 text-sm text-text-primary transition-all duration-300 hover:bg-background-tertiary-highlight"
                            href=""
                        >
                            Distribution
                        </Link>
                        <Link
                            className="w-full rounded-lg bg-background-primary-highlight p-4 text-sm text-text-primary transition-all duration-300 hover:bg-background-tertiary-highlight"
                            href=""
                        >
                            Support
                        </Link>
                        <Link
                            className="w-full rounded-lg bg-background-primary-highlight p-4 text-sm text-text-primary transition-all duration-300 hover:bg-background-tertiary-highlight"
                            href=""
                        >
                            Unreal Engine
                        </Link>
                    </div>
                    <div className="flex grow items-end justify-center ">
                        <Button className="px-28 py-6">Download</Button>
                    </div>
                </div>
            )}
        </>
    )
}
