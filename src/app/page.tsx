import { useTranslations } from 'next-intl'
import Header from './components/Util/Header'
import Title from './components/Util/Title'

export default function Home() {
    const t = useTranslations('HomePage')

    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <Header />
            <main>
                <p>{t('title')}</p>
            </main>
        </div>
    )
}
