'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const SearchInput = () => {
    const [isSelected, setIsSelected] = useState(false)

    return (
        <div
            style={{
                backgroundColor: isSelected
                    ? 'var(--primary-highlight-background)'
                    : 'var(--tertiary-background)',
            }}
            className="flex items-center rounded-full bg-background-tertiary px-4"
        >
            <Search size={16} />
            <Input
                onBlur={() => setIsSelected(false)}
                onFocus={() => setIsSelected(true)}
                className="border-none bg-transparent focus-visible:ring-transparent focus-visible:ring-offset-0"
                placeholder="Search store"
            />
        </div>
    )
}

export default SearchInput
