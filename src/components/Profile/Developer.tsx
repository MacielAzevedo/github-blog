interface DeveloperProps {
    title: string
}

export function Developer({ title }: DeveloperProps) {
    return (
        <h1 className="text-2xl font-bold text-base-title">
            {title}
        </h1>)
}