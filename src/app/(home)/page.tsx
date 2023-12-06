import { Experiences } from '@/app/(home)/experiences'
import { SearchBar } from '@/app/(home)/search-bar'
import { Header } from '@/components/header'

import { Discounts } from './discounts'

export default function Store() {
    return (
        <main className="">
            <Header />
            <div className="max-w-[80%] mx-auto p-4 flex flex-col gap-12">
                <SearchBar />
                <Experiences />
                <Discounts />
            </div>
        </main>
    )
}
