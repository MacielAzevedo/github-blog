import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return (
    <div className="h-5 flex items-center justify-center gap-2">{children}</div>
  )
}
