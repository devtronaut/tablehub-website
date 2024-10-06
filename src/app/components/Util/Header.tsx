import Title from './Title'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSelector } from './LanguageSelector'

export default function Header() {
    return (
        <div className="min-w-full p-8 fixed top-0 left-0 flex flex-row justify-between items-center bg-secondaryBlue/50">
            <div className="w-fit">
                <Title />
            </div>
            <div className="w-fit flex flex-row gap-4">
                <ThemeToggle />
                <LanguageSelector />
            </div>
        </div>
    )
}
