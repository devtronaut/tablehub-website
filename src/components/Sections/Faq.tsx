import { useTranslations } from 'next-intl'
import { SectionTitle } from '../Util/SectionTitle'
import React, {
    JSXElementConstructor,
    ReactElement,
    ReactNodeArray,
} from 'react'

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
                    question={`${t('qWhyTablehub')}`}
                    answer={t.rich('aWhyTablehub', {
                        about: chunks => (
                            <a
                                href="#about"
                                className="underline text-shimmerDark dark:text-shimmer"
                            >
                                {chunks}
                            </a>
                        ),
                    })}
                />
                <FaqElement
                    question={`${t('qHowWork')}`}
                    answer={`${t('aHowWork')}`}
                />
                <FaqElement question={`${t('qBeta')}`} answer={t('aBeta')} />
                <FaqElement
                    question={t('qCost')}
                    answer={t.rich('aCost', {
                        email: chunks => (
                            <a
                                href="mailto:tablehub@hotmail.com"
                                className="underline text-shimmerDark dark:text-shimmer"
                            >
                                {chunks}
                            </a>
                        ),
                    })}
                />
            </div>
        </div>
    )
}

type FaqProps = {
    question: string
    answer?:
        | string
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactNodeArray
}

const FaqElement = ({ question, answer }: FaqProps) => {
    return (
        <div className="collapse collapse-arrow bg-cardLight dark:bg-cardDark shadow-md shadow-shimmer">
            <input type="radio" name="faq" />
            <div className="collapse-title font-semibold">{question}</div>
            <div className="collapse-content whitespace-pre-line text-wrap">
                {answer}
            </div>
        </div>
    )
}

export default FaqSection
