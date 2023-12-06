import { Experiences } from '@/app/(home)/experiences'
import { SearchBar } from '@/app/(home)/search-bar'
import { Header } from '@/components/header'

import { Discounts } from './discounts'
import DisplayGames from './display-games'
import FreeGames from './free-games'

export default function Store() {
    return (
        <main className="">
            <Header />
            <div className="mx-auto flex w-[80%] max-w-[1600px] flex-col gap-10 p-4">
                <SearchBar />
                <Experiences />
                <Discounts />
                <FreeGames />
                <DisplayGames />
            </div>
        </main>
    )
}
