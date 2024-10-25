type TitleProps = {
    size: 'md' | 'lg'
}
export default function Title({ size }: TitleProps) {
    return (
        // Margin (mr-10) to account for the Beta badge
        <div className="relative w-fit mr-10">
            <span
                className={`badge badge-accent absolute top-0 -z-10 
                        ${size === 'md' && 'text-[0.6rem] sm:text-xs lg:text-md -right-9 sm:-right-10'}
                        ${size === 'lg' && 'text-xs sm:text-xl -right-9 sm:-right-12 p-3'}`}
            >
                Beta
            </span>
            <p
                className={`font-extrabold text-black dark:text-white 
                        ${size === 'md' && 'text-2xl sm:text-3xl lg:text-4xl'}
                        ${size === 'lg' && 'text-6xl sm:text-7xl'}`}
            >
                Tablehub
            </p>
        </div>
    )
}
