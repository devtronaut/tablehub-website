export default function Title() {
    return (
        // Margin (mr-10) to account for the Beta badge
        <div className="relative w-fit mr-10">
            <a href="#home">
                <span className="text-[0.6rem] sm:text-xs lg:text-md badge badge-accent absolute top-0 -right-9 sm:-right-10 -z-10">
                    Beta
                </span>
                <p className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-black dark:text-white">
                    Tablehub
                </p>
            </a>
        </div>
    )
}
