import { Experiences } from '@/app/(home)/experiences'
import { SearchBar } from '@/app/(home)/search-bar'
import { Header } from '@/components/header'

export default function Store() {
    return (
        <main className="">
            <Header />
            <div className="max-w-[80%] mx-auto p-4 flex flex-col gap-6">
                <SearchBar />
                <Experiences />
            </div>
        </main>
    )
}
