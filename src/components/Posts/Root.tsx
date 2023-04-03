import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return (
    <section className="w-full grid grid-cols-2 gap-8 mb-60 max-sm:grid-cols-1">
      {children}
    </section>
  )
}
