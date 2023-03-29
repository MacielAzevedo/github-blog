interface CardProps {
    title: string
    content: string
    createdAt: string
}

export function Card({ title, content, createdAt }: CardProps) {
    return (
        <div className="w-full h-64 flex flex-col gap-5 rounded-profile bg-base-post border-2  border-transparent hover:border-base-label p-8">
            <div className="w-full flex justify-between items-start">
                <strong className="w-71 text-xl leading-relaxed text-base-title line-clamp-2">
                    {title}
                </strong>

                <span className="text-sm leading-relaxed text-base-span">
                    {createdAt}
                </span>
            </div>

            <p className="text-base-text text-justify line-clamp-4">
                {content}...
            </p>
        </div>
    )
}