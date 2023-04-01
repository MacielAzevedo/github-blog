interface CodeProps {
  content: string
}

export function Code({ content }: CodeProps) {
  return (
    <div className="w-full p-4 h-26 flex items-center gap-2 bg-base-post rounded-sm text-blue">
      {content}
    </div>
  )
}
