import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Tablehub',
    description:
        'Website for tablehub. Showcase and information for interested clubs.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="de">
            <body
                className={`font-normal antialiased dark:bg-backgroundDark bg-backgroundLight`}
            >
                {children}
            </body>
        </html>
    )
}
