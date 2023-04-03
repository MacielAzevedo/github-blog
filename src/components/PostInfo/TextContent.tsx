import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface TextContentProps {
  content: string
}

export function TextContent({ content }: TextContentProps) {
  return (
    <div className=" w-full font-bold text-base-text leading-relaxed text-justify">
      <ReactMarkdown children={content} className="mb-32" />
    </div>
  )
}
