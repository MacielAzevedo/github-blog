import { NavLink } from 'react-router-dom'

interface TriggerProps {
  path: string
  text: string
}

export function Trigger({ path, text }: TriggerProps) {
  return (
    <NavLink
      className="border-none text-xs text-blue flex items-center uppercase"
      to={path}
    >
      {text}
    </NavLink>
  )
}
