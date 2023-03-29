import { ReactNode } from "react"

interface BioProps {
    children: ReactNode
}

export function Bio({ children }: BioProps) {
    return (
        <p className="font-normal text-base text-base-text">
            {children}
        </p>
    )
}