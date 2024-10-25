import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

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
                shimmer: '#36c9b9'
            },
        },
    },
    plugins: [daisyui],
    daisyui: {
        base: false,
    },
}
export default config
