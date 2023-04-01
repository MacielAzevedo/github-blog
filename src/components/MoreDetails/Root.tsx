import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return <div className="w-fit h-7 flex items-center gap-6">{children}</div>
}
