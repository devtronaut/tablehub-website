import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import './globals.css'

export const metadata: Metadata = {
    title: 'Tablehub',
    description:
        'Website for Tablehub. Showcase and information for interested clubs.',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const locale = await getLocale()
    const messages = await getMessages()

    return (
        <html lang={locale}>
            <head>
                {/* The root for the favicon import refers to the 'public' directory */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon-16x16.png"
                />
            </head>
            <body
                className={`font-normal antialiased dark:bg-backgroundDark bg-backgroundLight dark:text-white text-black`}
            >
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
