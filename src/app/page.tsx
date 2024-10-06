import Header from './components/Util/Header'
import HomeSection from './components/Sections/Home'
import AboutSection from './components/Sections/About'
import DemoSection from './components/Sections/Demo'

const Landing = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="mt-[120px] snap-y snap-proximity p-8">
                <HomeSection />
                <DemoSection />
                <AboutSection />
            </main>
        </div>
    )
}

export default Landing
