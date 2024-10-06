import { useTranslations } from 'next-intl'
import { SectionTitle } from '../Util/SectionTitle'

const HomeSection = () => {
    const t = useTranslations('HomePage')

    return (
        <div id="home" className="h-screen scroll-mt-[120px]">
            <SectionTitle content="Home" />
            <p>{t('title')}</p>
        </div>
    )
}

export default HomeSection
