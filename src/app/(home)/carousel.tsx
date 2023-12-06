'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { clsx } from 'clsx'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import { useCountdown } from 'usehooks-ts'

type CarouselItem = {
    title: string
    imgUrl: string
    thumbUrl: string
    description: string
    buttonText: string
    redirectUrl: string
    subtitle: string
    logoUrl: string
    price: number
}

export const Carousel: React.FC<{ experiences: CarouselItem[] }> = ({ experiences }) => {
    const container = useRef<HTMLDivElement>(null)
    let [height, setHeight] = useState<number>(450)

    const [count, { startCountdown, resetCountdown }] = useCountdown({
        countStart: 1000,
        intervalMs: 10,
    })

    const [selectedExperience, setSelectedExperience] = useState<CarouselItem>(experiences[0])

    const onSelect = (experience: CarouselItem) => {
        if (selectedExperience.title === experience.title) return
        else {
            setSelectedExperience(experience)
            resetCountdown()
            startCountdown()
        }
    }

    useEffect(() => {
        const handleResize = () =>
            setHeight(container.current?.getBoundingClientRect().height || 450)

        handleResize()
        startCountdown()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [startCountdown])

    useEffect(() => {
        if (count === 0) {
            const index = experiences.findIndex(
                (experience) => experience.title === selectedExperience.title
            )
            setSelectedExperience(experiences[index + 1] || experiences[0])
            resetCountdown()
            startCountdown()
        }
    }, [count, experiences, resetCountdown, selectedExperience, startCountdown])

    return (
        <div className="flex gap-4">
            <div className="relative w-4/5 overflow-hidden">
                <div className="relative" ref={container}>
                    <Image
                        src={selectedExperience.imgUrl}
                        alt={selectedExperience.title}
                        className="overflow-hidden rounded-xl"
                        height={1280 / 1.78}
                        width={1280}
                    />
                </div>
                <div className="absolute bottom-0 left-0 flex w-2/5 flex-col gap-6 p-12">
                    <Image
                        src={selectedExperience.logoUrl}
                        width={280}
                        height={100}
                        alt={selectedExperience.title}
                    />
                    <div>
                        <p className="text-sm font-semibold leading-8">
                            {selectedExperience.subtitle.toUpperCase()}
                        </p>
                        <p className="leading-2 font-medium md:leading-8">
                            {selectedExperience.description}
                        </p>
                    </div>
                    <div>
                        {selectedExperience.price > 0 && (
                            <p className="pb-2">Starting at USD {selectedExperience.price}</p>
                        )}
                        <div className="flex gap-2">
                            <Button className="max-w-fit rounded-md px-4 py-6" variant="white">
                                {selectedExperience.buttonText.toUpperCase()}
                            </Button>
                            {selectedExperience.price > 0 && (
                                <Button
                                    className="max-w-fit gap-2 rounded-md border-none px-4 py-6 text-xs hover:bg-[#66666666]"
                                    variant="transparent"
                                >
                                    <PlusCircle size={20} />
                                    ADD TO WISHLIST
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid w-1/5 grid-cols-1 gap-2" style={{ maxHeight: height, height }}>
                {experiences.map((experience) => {
                    const isSelected = selectedExperience.title === experience.title
                    const percentage = (1000 - count) / 10
                    const className = clsx(
                        'relative overflow-hidden  hover:bg-background-tertiary px-4 rounded-xl',
                        isSelected &&
                            'bg-background-primary-highlight hover:bg-background-primary-highlight'
                    )
                    return (
                        <button
                            onClick={() => onSelect(experience)}
                            className={className}
                            key={experience.title}
                        >
                            {isSelected && (
                                <div
                                    style={{ width: `${percentage}%` }}
                                    className="absolute left-0 top-0 z-10 h-full bg-background-secondary-highlight"
                                />
                            )}
                            <div className="relative z-20 flex items-center gap-2 text-left">
                                <Image
                                    src={experience.thumbUrl}
                                    className="overflow-hidden rounded-[8px]"
                                    height={(height / 6) * 0.8}
                                    width={(height / (6 * 1.33)) * 0.8}
                                    alt={experience.title}
                                />
                                <p className="col-span-2 text-sm">{experience.title}</p>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
