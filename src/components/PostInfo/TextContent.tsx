interface TextContentProps {
  content: string
}

export function TextContent({ content }: TextContentProps) {
  return (
    <p className=" w-full font-bold text-base-text leading-relaxed text-justify">
      {content}
    </p>
  )
}
