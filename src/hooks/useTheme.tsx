'use client'

import { useEffect, useState } from 'react'

export enum ThemeOptions {
    SYSTEM = 'system',
    DARK = 'dark',
    LIGHT = 'light',
}

export const useTheme = (): [
    () => boolean,
    () => boolean,
    (theme: ThemeOptions) => void,
] => {
    const [currentTheme, setCurrentTheme] = useState<ThemeOptions>(
        ThemeOptions.SYSTEM
    )

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')

        if (
            !savedTheme ||
            !isValidTheme(savedTheme) ||
            savedTheme === ThemeOptions.SYSTEM
        ) {
            applySystemTheme()
            setCurrentTheme(ThemeOptions.SYSTEM)
        } else {
            applyUserTheme(savedTheme as ThemeOptions)
            setCurrentTheme(savedTheme as ThemeOptions)
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleSystemThemeChange = () => {
            if (!savedTheme || savedTheme === 'system') {
                applySystemTheme()
            }
        }

        mediaQuery.addEventListener('change', handleSystemThemeChange)

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange)
        }
    }, [])

    const isValidTheme = (theme: string) => {
        return Object.values(ThemeOptions).indexOf(theme as ThemeOptions) >= 0
    }

    const isLightMode = () => {
        return currentTheme === ThemeOptions.LIGHT
    }

    const isDarkMode = () => {
        return currentTheme === ThemeOptions.DARK
    }

    const changeTheme = (theme: ThemeOptions) => {
        setCurrentTheme(theme)
        localStorage.setItem('theme', theme)

        if (theme === ThemeOptions.SYSTEM) {
            applySystemTheme()
        } else {
            applyUserTheme(theme)
        }
    }

    const applyUserTheme = (theme: ThemeOptions) => {
        if (theme === ThemeOptions.DARK) {
            document.documentElement.classList.add('dark')
        } else if (theme === ThemeOptions.LIGHT) {
            document.documentElement.classList.remove('dark')
        }
    }

    const applySystemTheme = () => {
        const systemPrefersDark = window.matchMedia(
            `(prefers-color-scheme: ${ThemeOptions.DARK})`
        ).matches
        if (systemPrefersDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    return [isLightMode, isDarkMode, changeTheme]
}
