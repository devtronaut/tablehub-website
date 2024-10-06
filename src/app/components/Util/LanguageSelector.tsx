'use client'

import { setUserLocale } from '@/services/locale'

export const LanguageSelector = () => {
    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost m-1 flex flex-row flex-nowrap"
            >
                <LanguageIcon />
                <ChevronIcon />
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
                <li
                    onClick={() => {
                        setUserLocale('de')
                    }}
                >
                    <a>
                        <span className="badge badge-outline">DE</span>
                        Deutsch
                    </a>
                </li>
                <li
                    onClick={() => {
                        setUserLocale('fr')
                    }}
                >
                    <a>
                        <span className="badge badge-outline">FR</span>
                        Französisch
                    </a>
                </li>
                <li
                    onClick={() => {
                        setUserLocale('it')
                    }}
                >
                    <a>
                        <span className="badge badge-outline">IT</span>
                        Italienisch
                    </a>
                </li>
                <li
                    onClick={() => {
                        setUserLocale('en')
                    }}
                >
                    <a>
                        <span className="badge badge-outline">EN</span>
                        Englisch
                    </a>
                </li>
            </ul>
        </div>
    )
}

const LanguageIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="bi bi-translate dark:fill-white fill-black"
            viewBox="0 0 16 16"
        >
            <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z" />
            <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31" />
        </svg>
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
