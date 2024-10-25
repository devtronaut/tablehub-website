import { useTranslations } from 'next-intl'
import { SectionTitle } from '../Util/SectionTitle'
import UniqueSellingPoint from '../Home/UniqueSellingPoint'
import Title from '../Util/Title'

const HomeSection = () => {
    const t = useTranslations('HomePage')

    return (
        <div
            id="home"
            className="h-svh scroll-mt-[120px] flex flex-col items-center gap-6"
        >
            <div className="space-y-2">
                <p className="text-2xl w-full text-center">Welcome to</p>
                <Title size="lg" />
            </div>
            <UniqueSellingPoint />
        </div>
    )
}

export default HomeSection
