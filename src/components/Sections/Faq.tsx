import { useTranslations } from 'next-intl'
import { SectionTitle } from '../Util/SectionTitle'
import { TableDemo } from './Demo'

const FaqSection = () => {
    const t = useTranslations('demo')

    return (
        <div
            id="faq"
            className="h-screen scroll-mt-[120px] mb-20 flex flex-col items-center gap-6"
        >
            <SectionTitle content={'FAQ'} />
        </div>
    )
}

export default FaqSection
