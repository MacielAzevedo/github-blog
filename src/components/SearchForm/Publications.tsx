interface PublicationsProps {
    count: number
    text: string
}

export function Publications({ count, text }: PublicationsProps) {
    return (
        <span className="flex items-center text-sm font-normal text-base-span leading-relaxed">
            {`${count} ${text}`}
        </span>
    )
}