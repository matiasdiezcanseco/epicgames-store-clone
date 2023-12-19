import { Experiences } from '@/app/(home)/experiences'
import { SearchBar } from '@/app/(home)/search-bar'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { getDealsOfTheWeek, getFeaturedDiscounts } from '@/server/actions/discounts'
import { getDisplayGames } from '@/server/actions/display'
import { getMostPlayed } from '@/server/actions/most-played'
import { getTopSellers } from '@/server/actions/top-sellers'
import { getTopWishlisted } from '@/server/actions/top-wishlisted'

import ColumnDisplay from './column-display'
import { DoubleDisplay } from './double-display'
import FreeGames from './free-games'
import SectionSwiper from './section-swiper'
import { TripleDisplay } from './triple-display'

export default async function Store() {
    const featuredDiscounts = await getFeaturedDiscounts()
    const displayGames = await getDisplayGames()
    const dealsOfTheWeek = await getDealsOfTheWeek()
    const topSellers = await getTopSellers()
    const mostPlayed = await getMostPlayed()
    const topWishlisted = await getTopWishlisted()

    return (
        <main className="">
            <Header />
            <div className="mx-auto flex w-[80%] max-w-[1600px] flex-col gap-10 p-4">
                <SearchBar />
                <Experiences />
                <SectionSwiper title="Featured Discounts" products={featuredDiscounts} />
                <TripleDisplay title="" products={dealsOfTheWeek} />
                <FreeGames />
                <DoubleDisplay products={displayGames} />
                <ColumnDisplay
                    firstColumn={{ products: topSellers, title: 'Top Sellers' }}
                    secondColumn={{ products: mostPlayed, title: 'Most Played' }}
                    thirdColumn={{ products: topWishlisted, title: 'Top Wishlisted' }}
                />
            </div>
            <Footer />
        </main>
    )
}
