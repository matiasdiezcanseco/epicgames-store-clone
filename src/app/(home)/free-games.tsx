import React from 'react'
import { Button } from '@/components/ui/button'
import { getFreeGames } from '@/server/actions/free'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { GiftIcon } from 'lucide-react'
import Image from 'next/image'

const FreeGames = async () => {
    const freeGames = await getFreeGames()

    return (
        <div className="flex flex-col gap-6 rounded-md bg-background-tertiary px-8 py-10">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <GiftIcon size={35} />
                    <h3 className="text-lg">Free Games</h3>
                </div>
                <Button variant="transparent" className="px-6 py-4">
                    VIEW MORE
                </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {freeGames.map((game) => {
                    const isFreeNow = !(!!game.freeFinalDate && !!game.freeInitialDate)
                    const dateText = isFreeNow
                        ? `Free Now - ${dayjs(game.freeInitialDate).format('MMM DD')}`
                        : `Free ${dayjs(game.freeInitialDate).format('MMM DD')} - ${dayjs(
                              game.freeFinalDate
                          ).format('MMM DD')}`
                    const bannerClass = clsx(
                        'absolute bottom-0 left-0 w-full text-center py-1 text-sm',
                        isFreeNow ? 'bg-sky-500' : 'bg-black'
                    )

                    return (
                        <div className="flex flex-col gap-6" key={game.title}>
                            <div className="relative">
                                <Image
                                    className="overflow-hidden rounded-xl"
                                    src={game.imgUrl}
                                    alt={game.title}
                                    width={622}
                                    height={830}
                                    style={{ objectFit: 'contain' }}
                                />
                                <div className={bannerClass}>
                                    {isFreeNow ? 'FREE NOW' : 'COMING SOON'}
                                </div>
                            </div>
                            <div>
                                <p className="pb-1">{game.title}</p>
                                <p className="text-text-secondary">{dateText}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FreeGames
