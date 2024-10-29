import { useTranslations } from 'next-intl'
import { SectionTitle } from '../Util/SectionTitle'

import Image, { StaticImageData } from 'next/image'
import vbcUniBernLogo from '../../../public/clubs/VBCUniBern.png'
import volleyLuzernLogo from '../../../public/clubs/VolleyLuzern.png'

const AboutSection = () => {
    const t = useTranslations('about')

    return (
        <div
            id="about"
            className="h-screen scroll-mt-[120px] flex flex-col items-center gap-4"
        >
            <SectionTitle content={t('title')} />
            <div className="w-full lg:w-1/2 space-y-2 text-center">
                <p>
                    Tablehub is a service to allow volleyball clubs the display
                    of results, upcoming games and rankings on their websites in
                    an automated fashion, with very little effort.
                </p>
                <p>
                    The project is currently driven by one person. This can be a
                    limitation on one hand but results in close interaction with
                    the clubs using Tablehub. Tablehub is an open source
                    project. Collaboration is much appreciated!
                </p>
                <p>
                    The service uses data from the Swiss Volley API. It is in no
                    other way associated with or supported by Swiss Volley.
                </p>
            </div>

            <div className="text-lg text-center w-full">
                <p className="font-semibold">Clubs using Tablehub</p>
                <p>Thanks for your trust! ❤️</p>
                <div className="h-12 w-full mt-2 flex flex-row justify-center gap-4">
                    <ClubLogo
                        clubName="VBC Uni Bern"
                        link="https://vbcunibern.ch/home"
                        image={vbcUniBernLogo}
                    />
                    <ClubLogo
                        clubName="Volley Luzern"
                        link="https://volleyluzern.ch/"
                        image={volleyLuzernLogo}
                    />
                </div>
            </div>
        </div>
    )
}

type ClubLogoProps = {
    clubName: string
    link: string
    image: StaticImageData
}

const ClubLogo = ({ clubName, link, image }: ClubLogoProps) => {
    return (
        <a href={link} target="_blank">
            <div className="w-32 h-32 bg-white p-1 rounded-full overflow-clip">
                <Image
                    src={image}
                    alt={`${clubName} Logo`}
                    className="object-bottom"
                />
            </div>
        </a>
    )
}

export default AboutSection
