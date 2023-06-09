import { NavLink } from 'react-router-dom'
import { PostProps } from '../../contexts/BlogContext'
import { FormattedDateRelativeToNow } from '../../utils/formatter'

interface CardProps {
  post: PostProps
}

export function Card({ post }: CardProps) {
  const { number, body, title, created_at } = post

  return (
    <NavLink
      to={`/post/${number}`}
      className="w-full h-64 flex flex-col gap-5 rounded-profile bg-base-post border-2  border-transparent hover:border-base-label p-8"
    >
      <div className="w-full flex justify-between items-start max-sm:flex-col max-lg:flex-col">
        <strong className="w-71 text-xl leading-relaxed text-base-title line-clamp-2">
          {title}
        </strong>

        <span className="text-sm leading-relaxed text-base-span flex-1">
          {FormattedDateRelativeToNow(new Date(created_at))}
        </span>
      </div>

      <p className="text-base-text text-justify line-clamp-4 max-sm:line-clamp-3">
        {body}
      </p>
    </NavLink>
  )
}
