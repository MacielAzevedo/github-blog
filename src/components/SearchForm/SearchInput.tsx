import { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function SearchInput({ ...props }: SearchInputProps) {
    return (
        <input
            className="w-full h-12  py-3 px-4 mb-12 bg-base-input border border-base-border rounded-md placeholder:text-base-label focus-within:border-blue active:text-base-text outline-none"
            type="text"
            {...props}
        />
    )
}