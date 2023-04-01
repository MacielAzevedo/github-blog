interface AvatarProps {
  avatarURL: string
}

export function Avatar({ avatarURL }: AvatarProps) {
  return <img className="w-37 h-37 rounded-lg" src={avatarURL} alt="" />
}
