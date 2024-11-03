type SectionTitleProps = {
    content: string
}

export const SectionTitle = ({ content }: SectionTitleProps) => {
    return (
        <p className="w-full text-2xl sm:text-3xl font-semibold text-center">
            {content}
        </p>
    )
}
