type SectionTitleProps = {
    content: string
}

export const SectionTitle = ({ content }: SectionTitleProps) => {
    return (
        <p className="w-full text-3xl font-extrabold text-center">{content}</p>
    )
}
