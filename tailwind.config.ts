import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'
import { transform } from 'next/dist/build/swc'

const config: Config = {
    darkMode: 'selector',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            normal: 'rubik-regular',
            semibold: 'rubik-semibold',
            extrabold: 'rubik-extrabold',
        },
        extend: {
            colors: {
                backgroundDark: '#1d232a',
                backgroundLight: '#eceff4',
                cardDark: '#282f39',
                cardLight: '#fafcfc',
                shimmer: '#36c9b9',
            },
            animation: {
                wiggle: 'wiggle 2s ease infinite',
                bounce: 'bounce 2s linear infinite',
                spin: 'spin 3s linear infinite',
            },
            transitionTimingFunction: {
                bounce: 'cubic-bezier(0.280, 0.840, 0.420, 1)',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-15deg)' },
                    '50%': { transform: 'rotate(15deg)' },
                },
                bounce: {
                    '0%': { transform: 'scale(1, 1)      translateY(0)' },
                    '10%': { transform: 'scale(1.1, .9)   translateY(0)' },
                    '30%': { transform: 'scale(.9, 1.1)   translateY(-35%)' },
                    '50%': { transform: 'scale(1.05, .95) translateY(0)' },
                    '57%': { transform: 'scale(1, 1)      translateY(-5px)' },
                    '64%': { transform: 'scale(1, 1)      translateY(0)' },
                    '100%': { transform: 'scale(1, 1)      translateY(0)' },
                },
                spin: {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(-360deg)' },
                },
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        base: false,
    },
}
export default config
