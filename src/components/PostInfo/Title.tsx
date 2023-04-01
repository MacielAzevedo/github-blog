import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <div className="w-full flex justify-between items-center">{children}</div>
  )
}
