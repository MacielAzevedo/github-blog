import { ReactNode } from "react"

interface FooterProps {
    children: ReactNode
}

export function Footer({ children }: FooterProps) {
    return (
        <div className="w-full h-[422px] py-10 px-8 flex flex-col items-center gap-6">
            {children}
        </div>
    )
}