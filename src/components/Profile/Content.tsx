import { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <div className="w-full h-full flex justify-center items-center gap-8">
      {children}
    </div>
  )
}
