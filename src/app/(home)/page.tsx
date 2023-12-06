import { Experiences } from '@/app/(home)/experiences'
import { SearchBar } from '@/app/(home)/search-bar'
import { Header } from '@/components/header'

import { Discounts } from './discounts'
import FreeGames from './free-games'

export default function Store() {
    return (
        <main className="">
            <Header />
            <div className="max-w-[1600px] w-[80%] mx-auto p-4 flex flex-col gap-10">
                <SearchBar />
                <Experiences />
                <Discounts />
                <FreeGames />
            </div>
        </main>
    )
}
