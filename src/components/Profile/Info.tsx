import { ReactNode } from "react"

interface InfoProps {
    children: ReactNode
}

export function Info({ children }: InfoProps) {
    return (
        <div className="w-full h-full flex flex-col gap-5">
            {children}
        </div>
    )
}