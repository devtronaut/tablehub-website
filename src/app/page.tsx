import { useTranslations } from 'next-intl'
import Header from './components/Util/Header'
import HomeSection from './components/Sections/Home'
import AboutSection from './components/Sections/About'
import DemoSection from './components/Sections/Demo'

const Landing = () => {
    const t = useTranslations('HomePage')

    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <Header />
            <main>
                <p>{t('title')}</p>
                <HomeSection />
                <DemoSection />
                <AboutSection />
            </main>
        </div>
    )
}

export default Landing
