import Title from './Title'
import { ThemeToggle } from './ThemeToggle'

export default function Header() {
    return (
        <div className="min-w-full p-8 fixed top-0 left-0 flex flex-row justify-between items-center">
            <div className="w-fit">
                <Title />
            </div>
            <div className="w-fit">
                <ThemeToggle />
            </div>
        </div>
    )
}
