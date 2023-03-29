interface TitleProps {
    text: string
}

export function Title({ text }: TitleProps) {
    return (
        <strong className="text-lg font-bold text-base-subtitle">
            {text}
        </strong>
    )
}