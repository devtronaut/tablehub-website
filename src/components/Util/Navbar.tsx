'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

enum Section {
    HOME = '#home',
    DEMO = '#demo',
    ABOUT = '#about',
}

export const Navbar = () => {
    const [currentSection, setCurrentSection] = useState<Section>(Section.HOME)

    const onHashChange = () => {
        for (const section of Object.entries(Section)) {
            if (section[1] === window.location.hash) {
                setCurrentSection(section[1])
                return
            } else {
                setCurrentSection(Section.HOME)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('hashchange', onHashChange)

        return () => {
            window.removeEventListener('hashchange', onHashChange)
        }
    }, [])

    return (
        <div className="space-x-10 text-2xl w-full ml-10 self-end">
            <Link
                href="#home"
                className={`${currentSection === Section.HOME ? 'underline' : 'hover:font-extrabold'}`}
                onClick={() => setCurrentSection(Section.HOME)}
            >
                Home
            </Link>
            <Link
                href="#demo"
                className={`${currentSection === Section.DEMO ? 'underline' : 'hover:font-extrabold'}`}
                onClick={() => setCurrentSection(Section.DEMO)}
            >
                Demo
            </Link>
            <Link
                href="#about"
                className={`${currentSection === Section.ABOUT ? 'underline' : 'hover:font-extrabold'}`}
                onClick={() => setCurrentSection(Section.ABOUT)}
            >
                About
            </Link>
        </div>
    )
}
