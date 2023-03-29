import { ReactNode } from "react"

interface RootProps {
    children: ReactNode
}

export function Root({ children }: RootProps) {
    return (
        <div className="w-full h-54 bg-base-profile rounded-profile -mt-16 shadow-custom p-8">
            {children}
        </div>
    )
}