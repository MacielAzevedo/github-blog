import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> { }

export function Avatar({ ...props }: AvatarProps) {
    return (
        <img className="w-37 h-37 rounded-lg"  {...props} />
    )
}