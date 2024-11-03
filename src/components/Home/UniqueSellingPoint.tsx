import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'

const UniqueSellingPoint = () => {
    const t = useTranslations('usp')

    return (
        <div className="w-full text-center space-y-6">
            <p>{t('intro')}</p>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-stretch gap-6">
                <UspCard
                    image={UpdatedIcon()}
                    title={t('updatedTitle')}
                    content={t('updatedContent')}
                />
                <UspCard
                    image={AutomatedIcon()}
                    title={t('automatedTitle')}
                    content={t('automatedContent')}
                />
                <UspCard
                    image={EasyIcon()}
                    title={t('simpleTitle')}
                    content={t('simpleContent')}
                />
            </div>
        </div>
    )
}

type UspCardProps = {
    image: ReactNode
    title: string
    content: string
}

const UspCard = ({ image, title, content }: UspCardProps) => {
    return (
        <div className="card dark:bg-cardDark bg-cardLight w-72 shadow-md shadow-shimmer p-0 m-0">
            <figure className="px-10 pt-10 m-auto w-3/4 sm:w-full">
                {image}
            </figure>
            <div className="card-body items-center text-center px-4 py-6">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}

const UpdatedIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="w-1/2 dark:fill-white fill-black hover:animate-spin"
        >
            <path
                className=""
                d="M160-160v-80h110l-16-14q-52-46-73-105t-21-119q0-111 66.5-197.5T400-790v84q-72 26-116 88.5T240-478q0 45 17 87.5t53 78.5l10 10v-98h80v240H160Zm400-10v-84q72-26 116-88.5T720-482q0-45-17-87.5T650-648l-10-10v98h-80v-240h240v80H690l16 14q49 49 71.5 106.5T800-482q0 111-66.5 197.5T560-170Z"
            />
        </svg>
    )
}

const AutomatedIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="w-1/2 dark:fill-white fill-black origin-bottom hover:animate-bounce ease-bounce"
        >
            <path d="M160-120v-200q0-33 23.5-56.5T240-400h480q33 0 56.5 23.5T800-320v200H160Zm200-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360ZM240-200h480v-120H240v120Zm120-320h240q50 0 85-35t35-85q0-50-35-85t-85-35H360q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600Zm240 0q17 0 28.5-11.5T640-640q0-17-11.5-28.5T600-680q-17 0-28.5 11.5T560-640q0 17 11.5 28.5T600-600ZM480-200Zm0-440Z" />
        </svg>
    )
}

const EasyIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="w-1/2 dark:fill-white fill-black origin-bottom hover:animate-wiggle"
        >
            <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
        </svg>
    )
}

export default UniqueSellingPoint
