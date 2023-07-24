interface CardProps {
    title: string
    showSub: boolean
    rounded: boolean
    textColour: string
    children: React.ReactNode
}
const Badge = ({
    title,
    showSub,
    textColour,
    rounded,
    children,
}: CardProps) => {
    return (
        <span
            className={`inline-flex items-center rounded-md bg-pink-100 px-1.5 py-0.5 text-xs font-medium ${textColour}`}
        >
            {title}
        </span>
    )
}

export default Badge
