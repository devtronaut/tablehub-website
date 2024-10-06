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
        <div className="space-x-4 lg:space-x-10 text-xl lg:text-2xl w-full ml-4 lg:ml-10 self-end hidden sm:block">
            <NavLink
                linkText="Home"
                targetHash="#home"
                targetSection={Section.HOME}
                isActive={currentSection === Section.HOME}
                onNavigate={setCurrentSection}
            />
            <NavLink
                linkText="Demo"
                targetHash="#demo"
                targetSection={Section.DEMO}
                isActive={currentSection === Section.DEMO}
                onNavigate={setCurrentSection}
            />
            <NavLink
                linkText="About"
                targetHash="#about"
                targetSection={Section.ABOUT}
                isActive={currentSection === Section.ABOUT}
                onNavigate={setCurrentSection}
            />
        </div>
    )
}

type NavLinkProps = {
    linkText: string
    targetHash: string
    targetSection: Section
    isActive: boolean
    onNavigate: (section: Section) => void
}

const NavLink = ({
    linkText,
    targetHash,
    targetSection,
    isActive,
    onNavigate,
}: NavLinkProps) => {
    return (
        <Link
            href={targetHash}
            className={`${isActive ? 'underline' : 'hover:font-semibold'}`}
            onClick={() => onNavigate(targetSection)}
        >
            {linkText}
        </Link>
    )
}