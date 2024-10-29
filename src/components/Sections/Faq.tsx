import { useTranslations } from 'next-intl'
import { SectionTitle } from '../Util/SectionTitle'

const FaqSection = () => {
    const t = useTranslations('faq')
    return (
        <div
            id="faq"
            className="scroll-mt-[120px] mb-20 flex flex-col items-center gap-6"
        >
            <SectionTitle content={'FAQ'} />

            <div className="w-full lg:w-1/2 space-y-4">
                <FaqElement
                    question={t('qWhyTablehub')}
                    answer={t('aWhyTablehub')}
                />
                <FaqElement question={t('qHowWork')} answer={t('aHowWork')} />
                <FaqElement question={t('qBeta')} answer={t('aBeta')} />
                <FaqElement question={t('qCost')} answer={t('aCost')} />
            </div>
        </div>
    )
}

type FaqProps = {
    question: string
    answer: string
}

const FaqElement = ({ question, answer }: FaqProps) => {
    return (
        <div className="collapse collapse-arrow bg-cardLight dark:bg-cardDark shadow-md shadow-shimmer">
            <input type="radio" name="faq" />
            <div className="collapse-title font-semibold">{question}</div>
            <div className="collapse-content whitespace-pre text-wrap">
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default FaqSection
