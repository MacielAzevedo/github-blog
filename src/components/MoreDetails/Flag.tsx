import { ReactNode } from 'react'

interface FlagProps {
  icon: ReactNode
  text: string
  count?: number
}

export function Flag({ icon, text, count }: FlagProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-base-label">{icon}</div>
      <strong className="text-base-span font-normal leading-relaxed">
        {count} {text}
      </strong>
    </div>
  )
}
