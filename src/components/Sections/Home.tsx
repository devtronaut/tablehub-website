import { useTranslations } from 'next-intl'
import UniqueSellingPoint from '../Home/UniqueSellingPoint'
import Title from '../Util/Title'

const HomeSection = () => {
    const t = useTranslations('home')

    return (
        <div
            id="home"
            className="scroll-mt-[120px] mb-20 flex flex-col items-center gap-6"
        >
            <div className="space-y-2">
                <p className="text-2xl w-full text-center">{t('welcome')}</p>
                <Title size="lg" />
            </div>
            <UniqueSellingPoint />
            <p>
                {t('interested')}{' '}
                <a
                    href="#demo"
                    className="text-shimmerDark dark:text-shimmer hover:underline"
                >
                    {t('readon')}
                </a>
            </p>
        </div>
    )
}

export default HomeSection
