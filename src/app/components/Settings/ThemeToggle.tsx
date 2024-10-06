'use client'

import { useTheme, ThemeOptions } from '@/app/hooks/useTheme'
import { ChangeEvent } from 'react'

export const ThemeToggle = () => {
    const [isLightMode, isDarkMode, changeTheme] = useTheme()

    const handleToggleChange = (e: ChangeEvent) => {
        if ((e.target as HTMLInputElement).checked) {
            changeTheme(ThemeOptions.DARK)
        } else {
            changeTheme(ThemeOptions.LIGHT)
        }
    }

    return (
        <label className="label cursor-pointer">
            <SunIcon isActive={isLightMode()} />
            <input
                type="checkbox"
                className={`toggle mx-2 ${isLightMode() ? 'border-sky-300 bg-white hover:bg-sky-100 [--tglbg:#1d4ed8]' : 'border-yellow-100 bg-white hover:bg-yellow-100 [--tglbg:#0f172a]'}`}
                defaultChecked={isDarkMode()}
                onChange={e => handleToggleChange(e)}
            />
            <MoonIcon isActive={isDarkMode()} />
        </label>
    )
}

type ToggleIconProps = {
    isActive: boolean
}

const SunIcon = ({ isActive }: ToggleIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className={`bi bi-brightness-low-fill ${isActive ? 'fill-amber-400' : 'fill-stone-500'}`}
            viewBox="0 0 16 16"
        >
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
            {isActive && (
                <path d="M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707" />
            )}
        </svg>
    )
}

const MoonIcon = ({ isActive }: ToggleIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className={`bi bi-moon-stars-fill ${isActive ? 'fill-amber-200' : 'fill-stone-500'}`}
            viewBox="0 0 16 16"
        >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
            {isActive && (
                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
            )}
        </svg>
    )
}
