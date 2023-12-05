'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { clsx } from 'clsx'
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
    }, [])

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
            <div className="w-9/12 relative overflow-hidden">
                <div className="relative" ref={container}>
                    <Image
                        src={selectedExperience.imgUrl}
                        alt={selectedExperience.title}
                        className="rounded-xl overflow-hidden"
                        height={1280 / 1.78}
                        width={1280}
                    />
                </div>
                <div className="absolute bottom-0 left-0 p-12 w-2/5 flex flex-col gap-6">
                    <Image
                        src={selectedExperience.logoUrl}
                        width={280}
                        height={100}
                        alt={selectedExperience.title}
                    />
                    <div>
                        <p className="leading-8 text-sm font-semibold">
                            {selectedExperience.subtitle.toUpperCase()}
                        </p>
                        <p className="font-medium leading-2 md:leading-8">
                            {selectedExperience.description}
                        </p>
                    </div>
                    <Button className="rounded-md px-4 py-6 max-w-fit">
                        {selectedExperience.buttonText.toUpperCase()}
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 w-3/12 gap-2" style={{ maxHeight: height, height }}>
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
                                    className="absolute bg-background-secondary-highlight top-0 left-0 z-10 h-full"
                                />
                            )}
                            <div className="relative flex gap-2 items-center z-20 text-left">
                                <Image
                                    src={experience.thumbUrl}
                                    className="rounded-[8px] overflow-hidden"
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
