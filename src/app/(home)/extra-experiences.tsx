"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'

type ExtraExperienceCard = {
    title: string
    imgUrl: string
    thumbUrl: string
    description: string
    buttonText: string
    redirectUrl: string

}

export const ExtraExperiences: React.FC<{experiences: ExtraExperienceCard[]}> = ({experiences}) => {

    const container = useRef<HTMLDivElement>(null)
    let [height, setHeight] = useState<number>(450);

    const [selectedExperience, setSelectedExperience] = useState<ExtraExperienceCard>(experiences[0])

    const onSelect = (experience: ExtraExperienceCard) => {
        if(selectedExperience.title === experience.title) return;
        else setSelectedExperience(experience)
    }

    useEffect(() => {
        const handleResize = () => 
            setHeight((container.current?.getBoundingClientRect().height  || 450))
            
        handleResize()
        window.addEventListener('resize', handleResize)
        
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return (
            <div className='flex gap-4'>
                <div className="w-9/12 relative">
                    <div className="relative" ref={container}>
                        <Image src={selectedExperience.imgUrl} alt={selectedExperience.title} className='rounded-xl overflow-hidden' height={1280/1.78} width={1280}  />
                    </div>
                    <div className='absolute bottom-0 left-0 p-2 w-2/3 flex flex-col gap-2'>
                        <h3>{selectedExperience.title}</h3>
                        <p>{selectedExperience.description}</p>
                        <Button className='rounded-lg px-4 py-2 max-w-fit'>{selectedExperience.buttonText}</Button>
                    </div>   
                </div>
                <div className='grid grid-cols-1 w-3/12 gap-2' style={{maxHeight: height, height}} >
                    {experiences.map((experience) => (
                        <button onClick={() => onSelect(experience)} className='flex hover:bg-background-tertiary px-4 rounded-xl text-left items-center gap-2' key={experience.title}>
                            <Image src={experience.thumbUrl} className='rounded-[8px] overflow-hidden' height={height/6 * 0.8} width={height/(6 * 1.33) * 0.8}  alt={experience.title}/>
                            <p className='col-span-2 text-sm'>{experience.title}</p>
                        </button>
                    ))}
                </div>
            </div>
  )
}
