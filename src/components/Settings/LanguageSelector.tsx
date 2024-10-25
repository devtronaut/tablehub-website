'use client'

import { Locale } from '@/i18n/config'
import { setUserLocale, getUserLocale } from '@/services/locale'
import { useEffect, useState } from 'react'

export const LanguageSelector = () => {
    const [currentLang, setCurrentLang] = useState('')

    useEffect(() => {
        const getLang = async () => {
            const locale = await getUserLocale()
            setCurrentLang(locale)
        }

        getLang().catch(console.error)
    }, [])

    const handleLanguageChange = (newLocale: Locale) => {
        setUserLocale(newLocale)
        setCurrentLang(newLocale)
    }

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost p-2 lg:p-4 lg:m-1 flex flex-row flex-nowrap"
            >
                {currentLang === 'de' && <GermanItem />}
                {currentLang === 'fr' && <FrenchItem />}
                {currentLang === 'it' && <ItalianItem />}
                {currentLang === 'en' && <EnglishItem />}
                <ChevronIcon />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content menu dark:bg-backgroundDark/75 bg-backgroundLight/75 backdrop-blur-sm rounded-box z-[1] w-52 p-2 shadow"
            >
                <li
                    onClick={() => {
                        handleLanguageChange('de')
                    }}
                >
                    <a>
                        <GermanItem />
                    </a>
                </li>
                <li
                    onClick={() => {
                        handleLanguageChange('fr')
                    }}
                >
                    <a>
                        <FrenchItem />
                    </a>
                </li>
                <li
                    onClick={() => {
                        handleLanguageChange('it')
                    }}
                >
                    <a>
                        <ItalianItem />
                    </a>
                </li>
                <li
                    onClick={() => {
                        handleLanguageChange('en')
                    }}
                >
                    <a>
                        <EnglishItem />
                    </a>
                </li>
            </ul>
        </div>
    )
}

const GermanItem = () => <LanguageItem shortLang="DE" lang="Deutsch" />
const ItalianItem = () => <LanguageItem shortLang="IT" lang="Italiano" />
const EnglishItem = () => <LanguageItem shortLang="EN" lang="English" />
const FrenchItem = () => <LanguageItem shortLang="FR" lang="Francais" />

type LanguageItemProps = {
    shortLang: 'DE' | 'EN' | 'IT' | 'FR'
    lang: 'Deutsch' | 'English' | 'Italiano' | 'Francais'
}

const LanguageItem = ({ shortLang, lang }: LanguageItemProps) => {
    return (
        <>
            <span className="sm:badge sm:badge-outline sm:w-10">
                {shortLang}
            </span>
            <span className="hidden md:inline">{lang}</span>
        </>
    )
}

const ChevronIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="bi bi-chevron-down dark:fill-white fill-black"
            viewBox="0 0 16 16"
        >
            <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
        </svg>
    )
}
