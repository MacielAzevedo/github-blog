import { ReactNode } from "react"

interface ContentProps {
    children: ReactNode
}

export function Content({ children }: ContentProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            {children}
        </div>
    )
}