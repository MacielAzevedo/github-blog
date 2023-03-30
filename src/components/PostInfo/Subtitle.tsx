interface SubtitleProps {
    text: string
}

export function Subtitle({ text }: SubtitleProps) {
    return (
        <strong className="text-2xl font-bold text-base-title">
            {text}
        </strong>
    )
}