import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const SearchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof SearchFormSchema>

interface SearchInputProps {
    placeholder: string
}

export function SearchInput({ placeholder }: SearchInputProps) {
    const { register, watch } = useForm({
        resolver: zodResolver(SearchFormSchema)
    })

    const search = watch("query")

    return (
        <input
            className="w-full h-12  py-3 px-4 mb-12 bg-base-input border border-base-border rounded-md placeholder:text-base-label focus-within:border-blue active:text-base-text outline-none"
            type="text"
            placeholder={placeholder}
            {...register("query")}
        />
    )
}