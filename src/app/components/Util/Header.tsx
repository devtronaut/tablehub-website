import Title from './Title'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSelector } from './LanguageSelector'
import { Navbar } from './Navbar'

export default function Header() {
    return (
        <div className="min-w-full p-8 fixed top-0 left-0 flex flex-row justify-between items-center">
            <div className="h-fit w-fit flex flex-row">
                <Title />
                <Navbar />
            </div>
            <div className="w-fit flex flex-row flex-nowrap gap-4">
                <ThemeToggle />
                <LanguageSelector />
            </div>
        </div>
    )
}
