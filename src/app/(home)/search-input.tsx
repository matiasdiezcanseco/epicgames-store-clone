'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '@/components/ui/input'

const SearchInput = () => {

    const [isSelected, setIsSelected] = useState(false)  

    return (
    <div 
        style={{backgroundColor:  isSelected? 'var(--primary-highlight-background)' :'var(--tertiary-background)'}} 
        className="bg-background-tertiary flex items-center rounded-full py-1 px-2">
        <Search size={16}/>
        <Input 
            onBlur={() => setIsSelected(false)} 
            onFocus={() => setIsSelected(true)} 
            className='bg-transparent border-none focus-visible:ring-transparent focus-visible:ring-offset-0' 
            placeholder="Search store" />
    </div>
  )
}

export default SearchInput