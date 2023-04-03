import { ReactNode } from 'react'

interface BioProps {
  children: ReactNode
}

export function Bio({ children }: BioProps) {
  return (
    <p className="font-normal text-base text-base-text text-ellipsis line-clamp-2 max-sm:text-center">
      {children}
    </p>
  )
}
