import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <div className="w-full h-42 flex flex-col items-center gap-5 p-8 bg-base-profile shadow-custom rounded-profile -mt-16">
      {children}
    </div>
  )
}
