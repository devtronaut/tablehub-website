import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Tablehub',
        short_name: 'Tablehub',
        description:
            'Website for Tablehub. Showcase and information for interested clubs.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            // The root for the favicon import refers to the 'public' directory
            {
                src: '/favicons/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/favicons/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/favicons/apple-touch-icon.png',
                type: 'image/png',
            },
        ],
    }
}
