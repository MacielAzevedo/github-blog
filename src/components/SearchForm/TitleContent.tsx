import { ReactNode } from "react"

interface TitleContentProps {
    children: ReactNode
}

export function TitleContent({ children }: TitleContentProps) {
    return (
        <div className="w-full flex justify-between items-center">
            {children}
        </div>
    )
}