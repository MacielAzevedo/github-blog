import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return (
    <section className="flex flex-col items-center gap-3">{children}</section>
  )
}
