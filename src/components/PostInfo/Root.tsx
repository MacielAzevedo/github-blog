import { ReactNode } from "react"

interface RootProps {
    children: ReactNode
}

export function Root({ children }: RootProps) {
    return (
        <div className="h-full w-full flex flex-col">
            {children}
        </div>
    )
}