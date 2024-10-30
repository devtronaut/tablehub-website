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
            className="scroll-mt-[120px] mb-20 flex flex-col items-center gap-4"
        >
            <SectionTitle content={t('title')} />
            <div className="w-full lg:w-1/2 space-y-8 text-center">
                <div className="space-y-2">
                    <p>{t('intro')}</p>

                    <div className="w-full">
                        <p>{t('thanks')}</p>
                        <div className="h-fit w-full mt-2 flex flex-row flex-wrap justify-center gap-4">
                            <ClubLogo
                                clubName="VBC Uni Bern"
                                clubLink="https://vbcunibern.ch/home"
                                clubLogo={vbcUniBernLogo}
                            />
                            <ClubLogo
                                clubName="Volley Luzern"
                                clubLink="https://volleyluzern.ch/"
                                clubLogo={volleyLuzernLogo}
                                active={false}
                            />
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <p>{t('contribution')}</p>
                    <div className="flex flex-col w-fit m-auto sm:flex-row sm:justify-center gap-4">
                        <GitHubTag
                            projectName="tablehub-component"
                            projectLink="https://github.com/devtronaut/tablehub-component"
                        />
                        <GitHubTag
                            projectName="tablehub-core"
                            projectLink="https://github.com/devtronaut/tablehub-core"
                            comingSoon={true}
                        />
                        <GitHubTag
                            projectName="tablehub-website"
                            projectLink="https://github.com/devtronaut/tablehub-website"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

type ClubLogoProps = {
    clubName: string
    clubLink: string
    clubLogo: StaticImageData
    active?: boolean
}

const ClubLogo = ({
    clubName,
    clubLink,
    clubLogo,
    active = true,
}: ClubLogoProps) => {
    return (
        <a href={clubLink} target="_blank" className={`${!active && 'hidden'}`}>
            <div className="size-24 bg-white p-1 rounded-full overflow-clip">
                <Image
                    src={clubLogo}
                    alt={`${clubName} Logo`}
                    className="object-bottom"
                />
            </div>
        </a>
    )
}

type GitHubTagProps = {
    projectLink: string
    projectName: string
    comingSoon?: boolean
}

const GitHubTag = ({
    projectLink,
    projectName,
    comingSoon = false,
}: GitHubTagProps) => {
    const t = useTranslations('about')

    return (
        <a
            href={!comingSoon ? projectLink : ''}
            target="_blank"
            className="relative"
        >
            {comingSoon && (
                <div className="badge badge-accent w-fit absolute -bottom-2 -right-2">
                    {t('comingSoon')}
                </div>
            )}
            <div className="h-fit w-full sm:w-fit flex flex-row items-center gap-3 bg-cardLight dark:bg-cardDark p-3 rounded-xl shadow-md shadow-shimmer">
                <svg
                    viewBox="0 0 98 96"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:fill-cardLight fill-cardDark size-8"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    />
                </svg>
                <p className="text-nowrap">{projectName}</p>
            </div>
        </a>
    )
}

export default AboutSection
